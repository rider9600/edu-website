"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-100 mb-4">404</h1>
        <p className="text-2xl text-slate-300 mb-8">Page not found</p>
        <p className="text-slate-400 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist yet. This is a new
          platform, and we&apos;re still building content.
        </p>
        <a href="/" className="btn-primary">
          Back to Home
        </a>
      </div>
    </div>
  );
}
