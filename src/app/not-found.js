import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container">
      <div className="error-message">
        <h1 className="page-title">404: not found</h1>
        <p style={{ color: 'var(--muted)' }}>$ this route does not exist on this filesystem</p>
        <Link href="/" className="btn primary" style={{ marginTop: 20 }}>
          cd ~/home
        </Link>
      </div>
    </div>
  );
}
