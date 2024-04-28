import ResolveTicketSche from "../Module/ResolveTicketSche.js";

const ResolveTicketCon = async (req, res) => {
    try {
        const { ticketid, techid, techname, title, description, status, createdAt, answer, filename } = req.body;
        const data = new ResolveTicketSche({
            ticketId: ticketid,
            techid: techid,
            techname: techname,
            title: title,
            description: description,
            status: status,
            createdAt: createdAt,
            answer: answer,
            filename: filename,
            file: req.file
        });
        const result = await data.save();
        if (result) {
            res.send({
                status: true,
                message: "Ticket Resolve Successfully..."
            });
        }
    } catch (error) {
        res.send({
            status: false,
            message: `Error From Ticket Resolve Controller `,
            Error: error
        })
    }
}

export default ResolveTicketCon;