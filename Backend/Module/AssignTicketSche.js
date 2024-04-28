import mongoose from "mongoose";

const AssignTicketSche = new mongoose.Schema({
    ticketid: { type: String, require: true },
    techid: { type: String, require: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    status: { type: String, require: true },
    createdAt: { type: Date },
    file: { type: Object, require: true }
})

export default mongoose.model("assigntickets", AssignTicketSche);