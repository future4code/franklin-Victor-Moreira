import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContributorPage from "../pages/AddContributorPage/AddContributorPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AddContributorPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;