
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home/Home";
import UserPrivateCom from "./Commponent/UserPrivateCom";
import AdminPrivateCom from "./Commponent/AdminPrivateCom";
import TechPrivateCom from './Commponent/TechPrivateCom';
import PageNotFound from "./Commponent/PageNotFound";
import CreateTicket from "./Pages/User/CreateTicket";
import ViewTickets from "./Pages/User/ViewTickets";
import AdminViewTickets from "./Pages/Admin/AdminViewTickets";
import ResolveTickets from "./Pages/Admin/ResolveTickets";
import AssignedTickets from "./Pages/TechSupport/AssignedTicket";
import ModifyAssignedTicket from "./Pages/TechSupport/ModifyAssignedTicket";

function App() {

  return (
    <>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route element={<UserPrivateCom />} >
          <Route path="/CreateTicket" element={<CreateTicket />} />
          <Route path="/ViewTickes" element={<ViewTickets />} />
        </Route>
        <Route element={<AdminPrivateCom />}>
          <Route path="/AdminViewTickets" element={<AdminViewTickets />} />
          <Route path="/ResolveTickets" element={<ResolveTickets />} />
        </Route>
        <Route element={<TechPrivateCom />}>
          <Route path="/AssignedTickets" element={<AssignedTickets />} />
          <Route path="/ModifyAssignedTicket" element={<ModifyAssignedTicket />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
