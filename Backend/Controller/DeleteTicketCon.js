import TicketSche from "../Module/TicketSche.js";

const DeleteTicketCon = async (req, res) => {
    try {
        const result = await TicketSche.deleteOne({ _id: req.params.id });
        if (result) {
            res.send({
                status: true,
                result
            })
        } else {
            res.send({
                status: false,
                message: "Data Not Deleted..."
            })
        }
    } catch (error) {
        res.send({
            status: false,
            message: `Error From Delete Ticket Controller (Admin panel)`,
            Error: error
        })
    }
}

export default DeleteTicketCon;
