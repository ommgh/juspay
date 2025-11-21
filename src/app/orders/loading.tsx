export default function Loading() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <div className="animate-pulse space-y-4">
        <div className="h-10 bg-muted/40 rounded w-1/3" />{" "}
        <div className="mt-4 rounded-md border overflow-hidden">
          <div className="p-4">
            <div className="h-8 w-48 bg-muted/40 rounded mb-4" />{" "}
            <div className="h-6 bg-muted/40 rounded mb-2" />
            <div className="h-6 bg-muted/40 rounded mb-2" />
            <div className="h-6 bg-muted/40 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
