import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-accent">404</h1>
      <p className="mt-4 text-xl text-foreground/70">Page not found</p>
      <p className="mt-2 text-foreground/50">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8">
        <Button variant="primary" href="/">
          Go Home
        </Button>
      </div>
    </div>
  );
}
