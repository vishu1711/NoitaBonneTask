import express from "express";
import RegisterCon from "../Controller/RegisterCon.js";
import LoginCon from "../Controller/LoginCon.js";
import upload from "../Middleware/FileMulter.js";
import ViewTicketsCon from "../Controller/ViewTicketsCon.js";
import CreateTicketCon from './../Controller/CreateTicketCon.js';
import DeleteTicketCon from "../Controller/DeleteTicketCon.js";
import ChangeStatusCon from "../Controller/ChangeStatusCon.js";
import TechViewCon from "../Controller/TechViewCon.js";
import AssignTicketCon from "../Controller/AssignTicketCon.js";
import TechAssignedTicketCon from "../Controller/TechAssignedTicketCon.js";
import ResolveTicketCon from "../Controller/ResolveTicketCon.js";
import DeleteResolveAssignTicketCon from "../Controller/DeleteResovleAssignTicketCon.js";
import GetResolveTicketCon from "../Controller/GetResolveTicketCon.js";

//Router Object from express package
const router = express.Router();

//Project api Routing
//Register Route Api
router.post("/register", RegisterCon);

//Login Route Api
router.post("/login", LoginCon);

//Ticket Creating Api
router.post("/ticket", upload.single('file'), CreateTicketCon);

// View Tickets Api
router.get("/viewtickets", ViewTicketsCon);

// Delete Ticket Api
router.delete("/deleteticket/:id", DeleteTicketCon);

// Update Ticket Api
router.put("/changestatus/ticket/:id", ChangeStatusCon);

// Get All Tech Data Api
router.get("/viewtechdata", TechViewCon);

//Assign Ticket Store Data Api
router.post("/assignticket/techsupport", AssignTicketCon);

//Show Assigend Ticket List For Tech Support Api
router.get("/assignedticket/techsupport/:id", TechAssignedTicketCon);

//Resolve Ticket Api
router.post("/resolve/ticket", upload.single('file'), ResolveTicketCon);

//Delete Assign resolve Ticket Api
router.delete("/delete/assign/resolve/ticket/:id", DeleteResolveAssignTicketCon);

//All Resolve Tickets Api
router.get("/resolve/ticket", GetResolveTicketCon);

export default router;