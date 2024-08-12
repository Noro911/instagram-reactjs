import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/explore")({
  component: () => <div>Hello /explore!</div>,
});
