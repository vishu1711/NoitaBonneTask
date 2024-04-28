import mongoose from "mongoose";

const ResolveTicketSche = new mongoose.Schema({
    ticketid: { type: String, require: true },
    techid: { type: String, require: true },
    techname: { type: String, require: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, require: true },
    createdAt: { type: Date },
    resolveAt: { type: Date, default: Date.now() },
    answer: { type: String, required: true },
    filename: { type: String, require: true },
    file: { type: Object, require: true }
})

export default mongoose.model("resolvetickets", ResolveTicketSche);