/* Caro AI 客服 Agent · dshairbeauty.co.uk 专用
 * 多租户：CLIENT_ID=dshair → 后端 kb/dshair.json
 * 通过 next/script (afterInteractive) 加载，在 React 水合后执行，
 * 避免 SSR 内联脚本创建的 DOM 被 React 19 hydration 清除的问题。
 *
 * 网络策略（Vercel 优先 + ECS 兜底）：
 *   - 主端点 Vercel（海外低延迟），备端点国内 ECS（yuzupic.cn，国内可直达）
 *   - 加载时 ping Vercel 预检：国内不可达则直接落 ECS
 *   - 发消息失败自动切备端点（不双发，避免双倍烧 token）
 */
(function () {
  var CLIENT_ID = "dshair";
  var ECS_BASE = "https://yuzupic.cn/pay-api";
  var VERCEL_BASE = "https://embeddable-agent.vercel.app";
  var ecsAPI = ECS_BASE + "/chat?client=" + encodeURIComponent(CLIENT_ID);
  var vercelAPI = VERCEL_BASE + "/api/chat?client=" + encodeURIComponent(CLIENT_ID);

  var PRIMARY = vercelAPI, SECONDARY = ecsAPI, ACTIVE = PRIMARY;

  function ping(url) {
    return new Promise(function (resolve) {
      var ctrl = new AbortController();
      var timer = setTimeout(function () { ctrl.abort(); }, 2500);
      fetch(url, { method: "GET", signal: ctrl.signal, mode: "cors" })
        .then(function (r) { clearTimeout(timer); resolve(r.ok); })
        .catch(function () { clearTimeout(timer); resolve(false); });
    });
  }
  ping(vercelAPI).then(function (ok) { if (!ok) ACTIVE = SECONDARY || ecsAPI; });

  var WELCOME = "Hi there! I'm the D.S Hair & Beauty AI assistant. Ask me about products, MOQ, lead times, or private label.";

  function init() {
    if (document.getElementById("caro-bubble")) return;

    var root = document.getElementById("caro-ai-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "caro-ai-root";
      document.body.appendChild(root);
    }

    var css = document.createElement("style");
    css.textContent =
      "#caro-bubble{position:fixed;right:20px;bottom:88px;width:56px;height:56px;border-radius:50%;background:#5b9dff;color:#fff;font-size:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.3);z-index:99999}" +
      "#caro-panel{position:fixed;right:20px;bottom:156px;width:320px;max-width:90vw;height:420px;background:#fff;color:#111;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.25);display:none;flex-direction:column;overflow:hidden;z-index:99999;font-family:-apple-system,Segoe UI,Roboto,sans-serif}" +
      "#caro-log{flex:1;overflow:auto;padding:12px;font-size:14px;line-height:1.5}" +
      "#caro-input{display:flex;border-top:1px solid #eee}" +
      "#caro-input input{flex:1;border:0;padding:10px;outline:none}" +
      "#caro-input button{border:0;background:#5b9dff;color:#fff;padding:0 14px;cursor:pointer}";
    document.head.appendChild(css);

    var bubble = document.createElement("div");
    bubble.id = "caro-bubble";
    bubble.textContent = "💬";

    var panel = document.createElement("div");
    panel.id = "caro-panel";
    panel.innerHTML = '<div id="caro-log"></div><div id="caro-input"><input placeholder="Type your question…"><button>Send</button></div>';

    root.appendChild(bubble);
    root.appendChild(panel);

    var log = panel.querySelector("#caro-log");
    var input = panel.querySelector("#caro-input input");
    var btn = panel.querySelector("#caro-input button");

    function escHtml(s) {
      return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function renderRich(t) {
      var L = [], s = escHtml(t);
      var LA = 'target="_blank" rel="noopener" style="color:#1a56db;text-decoration:underline;font-weight:600"';
      s = s.replace(/\*\*([^*\n]+)\*\*/g, '<strong style="font-weight:700;color:#0b3ea8">$1</strong>');
      s = s.replace(/\[([^\]]+)\]\((https?:[^)\s]+|mailto:[^)\s]+)\)/g, function (m, x, u) {
        L.push('<a href="' + u + '" ' + LA + ">" + x + "</a>"); return "\x00" + (L.length - 1) + "\x00";
      });
      s = s.replace(/https?:\/\/[^\s<)]+/g, function (u) {
        var c = u.replace(/[.,;:!?)]+$/, ""), tr = u.slice(c.length);
        L.push('<a href="' + c + '" ' + LA + ">" + c + "</a>" + tr); return "\x00" + (L.length - 1) + "\x00";
      });
      s = s.replace(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, function (e) {
        L.push('<a href="mailto:' + e + '" style="color:#1a56db;text-decoration:underline;font-weight:600">' + e + "</a>");
        return "\x00" + (L.length - 1) + "\x00";
      });
      return s.replace(/\x00(\d+)\x00/g, function (m, i) { return L[+i]; });
    }

    function addMsg(who, text) {
      var d = document.createElement("div");
      d.style.margin = "6px 0";
      d.style.textAlign = who === "you" ? "right" : "left";
      d.innerHTML =
        '<span style="background:' + (who === "you" ? "#5b9dff" : "#f0f2f5") +
        ";color:" + (who === "you" ? "#fff" : "#111") +
        ';padding:6px 10px;border-radius:10px;display:inline-block;max-width:85%;word-break:break-word;white-space:pre-wrap">' +
        (who === "you" ? escHtml(text) : renderRich(text)) + "</span>";
      log.appendChild(d);
      log.scrollTop = log.scrollHeight;
    }

    var opened = false;
    bubble.onclick = function () {
      var show = panel.style.display !== "flex";
      panel.style.display = show ? "flex" : "none";
      if (show && !opened) {
        opened = true;
        if (!log.children.length) addMsg("assistant", WELCOME);
      }
    };

    function showReply(d) {
      addMsg("assistant", (d && d.reply ? d.reply : "(No reply yet)")
        .replace(/<LEAD>[\s\S]*?<\/LEAD>/g, "").trim() || "(No reply yet)");
    }
    function showFail() {
      addMsg("assistant", "Connection failed — please try again shortly, or leave your email and we'll get back to you.");
    }
    function attempt(api, q) {
      return fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q })
      })
        .then(function (r) { return r.json(); })
        .then(function (d) { showReply(d); });
    }

    function send() {
      var q = input.value.trim();
      if (!q) return;
      addMsg("you", q);
      input.value = "";
      btn.disabled = true;
      attempt(ACTIVE, q)
        .catch(function () {
          if (SECONDARY && ACTIVE !== SECONDARY) {
            ACTIVE = SECONDARY;
            return attempt(ACTIVE, q);
          }
          throw new Error("all endpoints failed");
        })
        .catch(function () { showFail(); })
        .finally(function () { btn.disabled = false; });
    }
    btn.onclick = send;
    input.onkeydown = function (e) { if (e.key === "Enter") send(); };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
