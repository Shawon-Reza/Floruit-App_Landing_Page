import { createBrowserRouter } from "react-router";
import LandingPage from "../Layout/LandingPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
]);

export default router;