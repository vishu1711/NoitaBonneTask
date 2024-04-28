import { Navigate, Outlet } from "react-router-dom";

const UserPrivateCom = () => {
    const auth = JSON.parse(localStorage.getItem("user"));
    return auth.role === "User" ? <Outlet /> : <Navigate to="/*" />;
}

export default UserPrivateCom;