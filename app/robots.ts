import { MetadataRoute } from 'next'

/**
 * AI-Ready robots.txt
 *
 * 为什么要显式列出 AI 爬虫，而不是只写 `User-agent: *`？
 * 1. 部分 CDN / WAF（Cloudflare Bot Fight Mode、Vercel Attack Challenge）会把未在
 *    robots.txt 中显式声明的 AI 爬虫当作可疑流量拦截。行业抽样显示约 1/3 的品牌站
 *    在不知情的情况下屏蔽了至少一个 AI 爬虫。
 * 2. 显式 Allow 是一个可被审计、可截图给客户看的凭证。
 * 3. 不同 AI 引擎使用不同 UA 完成不同任务（训练抓取 / 实时检索 / 用户点开链接），
 *    必须逐一放行，漏一个就少一个被引用的机会。
 */

// 训练与索引类
const AI_TRAINING_BOTS = [
  'GPTBot',            // OpenAI 训练抓取
  'ClaudeBot',         // Anthropic 训练抓取
  'anthropic-ai',      // Anthropic 旧标识
  'Google-Extended',   // Google Gemini / AI 概览 语料授权
  'Applebot-Extended', // Apple Intelligence 语料授权
  'meta-externalagent',// Meta AI
  'Amazonbot',         // Amazon / Alexa
  'Bytespider',        // 字节跳动（豆包/Doubao）
  'cohere-ai',
]

// 实时检索类（用户提问的当下去抓你的页面——GEO 里最关键的一类）
const AI_SEARCH_BOTS = [
  'OAI-SearchBot',     // ChatGPT Search
  'ChatGPT-User',      // 用户在 ChatGPT 中点开链接
  'Claude-User',       // 用户在 Claude 中点开链接
  'Claude-SearchBot',  // Claude 检索
  'PerplexityBot',     // Perplexity 索引
  'Perplexity-User',   // Perplexity 用户点击
  'YouBot',            // You.com
  'DuckAssistBot',     // DuckDuckGo AI
  'MistralAI-User',
]

// 传统搜索引擎（AI 概览的底层索引仍来自这里）
const SEARCH_BOTS = [
  'Googlebot',
  'Googlebot-Image',
  'GoogleOther',
  'bingbot',
  'BingPreview',
  'Applebot',
  'DuckDuckBot',
  'Slurp',
]

export default function robots(): MetadataRoute.Robots {
  const openRule = (userAgent: string) => ({
    userAgent,
    allow: '/',
    // 只屏蔽真正无意义的接口与账户区，保留 /_next/static/ 让渲染型爬虫拿得到样式
    disallow: ['/api/', '/account/', '/_next/image'],
  })

  return {
    rules: [
      ...AI_SEARCH_BOTS.map(openRule),
      ...AI_TRAINING_BOTS.map(openRule),
      ...SEARCH_BOTS.map(openRule),
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/account/', '/_next/image'],
      },
    ],
    sitemap: 'https://www.dshairbeauty.co.uk/sitemap.xml',
    host: 'https://www.dshairbeauty.co.uk',
  }
}
