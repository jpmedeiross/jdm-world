import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cars from "../pages/Cars";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="cars" element={<Cars />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;