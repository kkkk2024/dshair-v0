'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ padding: '2rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap', color: '#111' }}>
        <h1 style={{ color: '#b00' }}>GLOBAL ERROR (root layout)</h1>
        <p><strong>message:</strong> {error.message}</p>
        <p><strong>digest:</strong> {error.digest}</p>
        <pre style={{ background: '#f4f4f4', padding: '1rem', overflow: 'auto' }}>{error.stack}</pre>
        <button onClick={reset} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Retry</button>
      </body>
    </html>
  )
}
