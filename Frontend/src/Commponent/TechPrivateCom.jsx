import { Navigate, Outlet } from "react-router-dom";

const TechPrivateCom = () => {
    const auth = JSON.parse(localStorage.getItem("user"));
    return auth.role === "TechSupport" ? <Outlet /> : <Navigate to="/*" />;
}

export default TechPrivateCom;