'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap', color: '#111' }}>
      <h1 style={{ color: '#b00' }}>PAGE ERROR</h1>
      <p><strong>message:</strong> {error.message}</p>
      <p><strong>digest:</strong> {error.digest}</p>
      <pre style={{ background: '#f4f4f4', padding: '1rem', overflow: 'auto' }}>{error.stack}</pre>
      <button onClick={reset} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Retry</button>
    </div>
  )
}
