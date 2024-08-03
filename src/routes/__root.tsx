import { createRootRoute } from "@tanstack/react-router";
import { Sidebar } from "../components/layout/Sidebar";

export const Route = createRootRoute({
  component: () => (
    <div className="grid grid-cols-12 h-screen gap-4 bg-white dark:bg-dark-950">
      <div className="col-span-3 h-full border-dark-400 border-r-[0.5px] border-opacity-30">
        <Sidebar />
      </div>
      <div className="col-span-6">02</div>
      <div className="col-span-3">03</div>
    </div>
  ),
});
