import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { FarmerPortal } from "./pages/FarmerPortal";
import { ProcessorPortal } from "./pages/ProcessorPortal";
import { ConsumerView } from "./pages/ConsumerView";
import { AdminPanel } from "./pages/AdminPanel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "farmer", Component: FarmerPortal },
      { path: "processor", Component: ProcessorPortal },
      { path: "consumer", Component: ConsumerView },
      { path: "consumer/:batchId", Component: ConsumerView },
      { path: "admin", Component: AdminPanel },
    ],
  },
]);
