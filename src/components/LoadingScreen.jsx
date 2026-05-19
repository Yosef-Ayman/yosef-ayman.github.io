export default function LoadingScreen() {
  return (
    <main className="loading-screen" aria-label="Loading page">
      <div className="loading-card" aria-hidden="true">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line short" />
      </div>
    </main>
  );
}
