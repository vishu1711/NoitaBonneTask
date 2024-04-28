import AssignTicketSche from "../Module/AssignTicketSche.js";

const TechAssignedTicketCon = async (req, res) => {
    try {
        const result = await AssignTicketSche.find({ techid: req.params.id });
        if (result) {
            res.send({
                status: true,
                result
            })
        } else {
            res.send({
                status: false,
                message: "Erro From Assigned Ticket Tech Support Fetching Data Controller"
            })
        }

    } catch (error) {
        res.send(`Error From Assigned Ticket Controller : ${error}`)
    }
}

export default TechAssignedTicketCon;