import mongoose from "mongoose";

const TicketSche = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: "Open", require: true },  // Open or Close
    createdAt: { type: Date, default: Date.now() },
    file: { type: Object, require: true }
})

export default mongoose.model("tickets", TicketSche);