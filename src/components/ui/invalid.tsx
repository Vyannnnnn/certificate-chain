export default function Invalid() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">❌ INVALID CERTIFICATE</h1>
        <p className="mt-4">Certificate not found</p>
      </div>
    </div>
  );
}