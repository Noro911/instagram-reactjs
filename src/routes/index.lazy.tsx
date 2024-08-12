import { createLazyFileRoute } from "@tanstack/react-router";
import { StoriesBar } from "../pages/home/components/StoriesBar";
import { Post } from "../pages/home/components/Post";

export const Route = createLazyFileRoute("/")({
  component: () => (
    <div className="w-full">
      <StoriesBar />
      <div className="space-y-7">
        {[0, 1, 2, 3, 4].map((i) => (
          <Post key={i} />
        ))}
      </div>
    </div>
  ),
});
