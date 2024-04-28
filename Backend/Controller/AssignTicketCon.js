import AssignTicketSche from "../Module/AssignTicketSche.js";

const AssignTicketCon = async (req, res) => {
    try {
        const { techid, ticketid, title, description, status, createdAt } = req.body;
        const data = new AssignTicketSche({
            techid: techid,
            ticketid: ticketid,
            title: title,
            description: description,
            status: status,
            createdAt: createdAt,
            file: req.body.file
        });
        const result = await data.save();
        if (result) {
            res.send({
                status: true,
                message: "Assign Ticket Successfully..."
            });
        }
    } catch (error) {
        res.send({
            status: false,
            message: `Error From Assign Ticket Controller `,
            Error: error
        })
    }
}

export default AssignTicketCon;