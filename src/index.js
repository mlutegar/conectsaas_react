import React from "react";
import {createRoot} from "react-dom/client";

import Home from "./pages/Home";
import {HashRouter, Route, Routes} from "react-router-dom";
import Post from "./pages/Post";
import Logout from "./pages/Logout";
import Search from "./pages/Search";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<React.StrictMode>
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:slug" element={<Post />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    </HashRouter>
</React.StrictMode>);
