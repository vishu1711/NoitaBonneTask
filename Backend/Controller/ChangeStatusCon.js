import TicketSche from "../Module/TicketSche.js";

const ChangeStatusCon = async (req, res) => {
    try {
        let result = await TicketSche.updateOne(
            { _id: req.params.id },
            {
                $set: req.body
            });
        if (result) {
            res.send({
                status: true,
                result
            })
        } else {
            res.send({
                status: false,

            })
        }
    } catch (error) {
        res.send(`Error From Change Status Tickets Controller : ${error}`)
    }
}

export default ChangeStatusCon;