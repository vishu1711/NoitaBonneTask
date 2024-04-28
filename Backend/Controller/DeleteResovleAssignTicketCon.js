import AssignTicketSche from "../Module/AssignTicketSche.js";

const DeleteResolveAssignTicketCon = async (req, res) => {
    try {
        const result = await AssignTicketSche.deleteOne({ _id: req.params.id });
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
            message: `Error From Delete Resolve Ticket Controller (Tech Support panel)`,
            Error: error
        })
    }
}

export default DeleteResolveAssignTicketCon;
