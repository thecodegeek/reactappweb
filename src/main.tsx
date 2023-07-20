import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Avatar, Profile, Item } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Avatar size={200} person={{ name: ": Nonno Pino", imageId: "1hjfb7x" }} />
    <Profile />
    <Item name="Learn React" isPacked={true} />
    <Item name="Sunglasses" isPacked={true} />
    <Item name="Sunscreen" isPacked={false} />
  </React.StrictMode>
);
