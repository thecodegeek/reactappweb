import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Avatar } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Avatar size={50} person={{ name: "Lin Lanying", imageId: "1hjfb7x" }} />
  </React.StrictMode>
);
