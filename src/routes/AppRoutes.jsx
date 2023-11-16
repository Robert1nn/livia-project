import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}