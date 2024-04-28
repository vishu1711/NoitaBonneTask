import TicketSche from "../Module/TicketSche.js";

const CreateTicketCon = async (req, res) => {
    try {
        const { title, description } = req.body;
        const data = new TicketSche({
            title: title,
            description: description,
            file: req.file
        });
        const result = await data.save();
        if (result) {
            res.send({
                status: true,
                message: "Ticket Created Successfully..."
            });
        }
    } catch (error) {
        res.send({
            status: false,
            message: `Error From Create Ticket Controller `,
            Error: error
        })
    }
}

export default CreateTicketCon;