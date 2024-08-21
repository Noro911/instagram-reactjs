import { createRootRoute } from "@tanstack/react-router";
import { Sidebar } from "../components/layout/Sidebar";
import { useLocation, Outlet } from "@tanstack/react-router";

const RouteComponent = () => {
  const { pathname } = useLocation();
  return (
    <div className="grid grid-cols-12 h-screen gap-4 bg-white dark:bg-dark-950">
      <div className="col-span-3 h-screen border-dark-400 border-r-[0.5px] border-opacity-30">
        <Sidebar pathname={pathname} />
      </div>
      <div className="col-span-6 min-h-screen overflow-y-auto scrollbar-hide">
        <Outlet />
      </div>
      <div className="col-span-3">03</div>
    </div>
  );
};

export const Route = createRootRoute({
  component: RouteComponent,
});
