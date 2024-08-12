import { createLazyFileRoute } from "@tanstack/react-router";
import { StoriesBar } from "../pages/home/components/StoriesBar";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <div className="w-full">
      <StoriesBar />
    </div>
  ),
});
