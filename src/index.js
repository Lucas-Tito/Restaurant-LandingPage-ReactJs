import ReactDOM from "react-dom/client"
import App from "./App"
import "./style.css"
import Home from "./routes/Home"
import AboutUs from "./routes/AboutUs"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/Restaurant-LandingPage-ReactJs/",
                element: <Home/>
            },
            {
                path: "/Restaurant-LandingPage-ReactJs/aboutUs",
                element: <AboutUs/>
            }
        ]
    }
])


ReactDOM.createRoot(document.querySelector("#root")).render(
    <RouterProvider router={router} />
)
