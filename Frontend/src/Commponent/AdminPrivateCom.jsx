import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateCom = () => {
    const auth = JSON.parse(localStorage.getItem("user"));
    return auth.admin_email === "admin@gmail.com" ? <Outlet /> : <Navigate to="/*" />;
}

export default AdminPrivateCom;