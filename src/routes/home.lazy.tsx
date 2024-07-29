import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/home")({
  component: () => <div className="bg-red-400">Home</div>,
});
