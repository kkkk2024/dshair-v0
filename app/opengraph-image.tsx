import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'D.S HAIR & BEAUTY | Professional Hair Extension Supplier Manchester UK'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d0d0d',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 30% 50%, rgba(180,140,80,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(180,140,80,0.08) 0%, transparent 50%)',
          }}
        />

        {/* Top decorative line */}
        <div
          style={{
            position: 'absolute',
            top: 48,
            left: 80,
            right: 80,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #b48c50, transparent)',
          }}
        />

        {/* Bottom decorative line */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            left: 80,
            right: 80,
            height: 1,
            background: 'linear-gradient(90deg, transparent, #b48c50, transparent)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
            zIndex: 10,
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#f5f0e8',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              lineHeight: 1,
              marginBottom: 12,
            }}
          >
            D.S HAIR
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: '#b48c50',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              lineHeight: 1,
              marginBottom: 32,
            }}
          >
            & BEAUTY
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: 80,
              height: 2,
              background: '#b48c50',
              marginBottom: 28,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 22,
              color: '#c8b99a',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            100% Remy Human Hair
          </div>

          {/* Sub tagline */}
          <div
            style={{
              fontSize: 18,
              color: '#7a6a58',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Wholesale Supplier · Manchester, UK · Est. 2006
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 64,
            fontSize: 16,
            color: '#4a3f30',
            letterSpacing: '0.15em',
          }}
        >
          dshairbeauty.co.uk
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
