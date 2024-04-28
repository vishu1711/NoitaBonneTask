import TicketSche from "../Module/TicketSche.js";

const ViewTicketsCon = async (req, res) => {
    try {
        const data = await TicketSche.find();
        if (data) {
            res.send({
                status: true,
                data
            })
        }
    } catch (error) {
        res.send({
            status: false,
            message: `Error From View Tickets Controller `,
            Error: error
        })
    }
}

export default ViewTicketsCon;