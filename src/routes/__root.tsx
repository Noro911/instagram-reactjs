import { createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2">01</div>
      <div className="col-span-7">02</div>
      <div className="col-span-3">03</div>
    </div>
  ),
});
