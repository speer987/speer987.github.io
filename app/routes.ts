import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("work", "routes/work.tsx"),
    route("projects", "routes/projects.tsx"),
    route("resume", "routes/resume.tsx"),
    // enable this banner route to update linkedin banner
    // route("banner", "routes/banner.tsx")
] satisfies RouteConfig;
