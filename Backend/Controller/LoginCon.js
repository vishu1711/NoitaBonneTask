import RegisterSche from "../Module/RegisterSche.js";
import TechSupportSche from "../Module/TechSupportSche.js";
import bcrypt from "bcrypt";

const LoginCon = async (req, res) => {
    try {
        const admin_email = "admin@gmail.com";
        const admin_pass = "admin123";
        const { email, password, user } = req.body;
        if ((password === admin_pass) && (email === admin_email)) {
            const admin = { admin_email, admin_pass };
            res.send({
                message: "Admin Login Successfully... ",
                status: true,
                admin
            })
        } else if (user === "User") {
            const user = await RegisterSche.findOne({ email: email });
            if (user) {
                const isMatch = await bcrypt.compare(password, user.password);
                if (isMatch) {
                    res.send({
                        message: "User Login Successfully... ",
                        status: true,
                        user
                    })
                } else {
                    res.send({
                        status: false,
                        message: "Invalid Email && Password"
                    })
                }
            } else {
                res.send({
                    status: false,
                    message: "Invalid Email && Password"
                })
            }
        } else {
            const tech = await TechSupportSche.findOne({ email: email });
            if (tech) {
                const isMatch = await bcrypt.compare(password, tech.password);
                if (isMatch) {
                    res.send({
                        message: "Tech Support Login Successfully... ",
                        status: true,
                        tech
                    })
                } else {
                    res.send({
                        status: false,
                        message: "Invalid Email && Password"
                    })
                }
            } else {
                res.send({
                    status: false,
                    message: "Invalid Email && Password"
                })
            }
        }

    } catch (error) {
        res.send({
            status: false,
            message: `Error From Login Controller `,
            Error: error
        })
    }
}

export default LoginCon;