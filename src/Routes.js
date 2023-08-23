import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import Reports from "./pages/Reports"

const ApplicationRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/reports" element={<Reports/>}/>
        </Routes>
    );
}

export default ApplicationRoutes;