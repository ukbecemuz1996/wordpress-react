import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Show from "./Show";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Posts from "./Posts";
import Post from "./Post";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/archives",
      element: <Posts />,
    },
    {
      path: "/archives/:id",
      element: <Post />,
    },
  ]);

  return (
    <RouterProvider router={router}  />
  );
}

export default App;
