import TechSupportSche from "../Module/TechSupportSche.js";

const TechViewCon = async (req, res) => {
    try {
        const data = await TechSupportSche.find();
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

export default TechViewCon;