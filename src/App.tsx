
import {createBrowserRouter} from "react-router"

import { Private } from "./router/private"

import Home from "./pages/home"
import Login from "./pages/login"
import Admin from "./pages/admin"
import Network from "./pages/network"
import { NotFound } from "./pages/notFound/notFounds"

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/admin",
    element: <Private> <Admin/> </Private> 
  },
  {
    path: "/admin/sociais",
    element: <Private> <Network/> </Private> 
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

export { router };