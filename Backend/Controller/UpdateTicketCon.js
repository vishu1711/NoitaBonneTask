import TicketSche from "../Module/TicketSche.js";

const UpdateTicketCon = async (req, res) => {
    const { title, description, status } = req.body;
    try {
        const result = await TicketSche.updateOne(
            { _id: req.params.id },
            {
                // $set: req.body,
                $set: { title: title, description: description, status: status }
            }
        );
        if (result) {
            res.send({
                status: true,
                result
            })
        } else {
            res.send({
                status: false,
                message: "Data Not Updated...!"
            })
        }
    } catch (error) {
        res.send({
            status: false,
            message: `Error From Update Ticket Controller (Admin Panel)`,
            Error: error
        })
    }
}

export default UpdateTicketCon;