import ResolveTicketSche from "../Module/ResolveTicketSche.js";

const GetResolveTicketCon = async (req, res) => {
    try {
        const data = await ResolveTicketSche.find();
        if (data) {
            res.send({
                status: true,
                data
            })
        }
    } catch (error) {
        res.send({
            status: false,
            message: `Error From Fetch All Resolve Tickets Controller `,
            Error: error
        })
    }
}

export default GetResolveTicketCon;