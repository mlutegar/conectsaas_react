import React from "react";
import {createRoot} from "react-dom/client";

import Home from "./pages/Home";
import {HashRouter, Route, Routes} from "react-router-dom";
import Post from "./pages/Post";
import Search from "./pages/Search";
import Author from "./pages/Author";
import Categoria from "./pages/Categoria";
import FaleConosco from "./pages/FaleConosco";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<React.StrictMode>
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
            <Route path="/post/:slug" element={<Post />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/autor/:slug" element={<Author />} />
            <Route path="/categoria/:slug" element={<Categoria />} />
        </Routes>
    </HashRouter>
</React.StrictMode>);
