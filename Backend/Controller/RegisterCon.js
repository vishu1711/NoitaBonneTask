import RegisterSche from "../Module/RegisterSche.js";
import TechSupportSche from "../Module/TechSupportSche.js";
import bcrypt from "bcrypt";

const RegisterCon = async (req, res) => {
    try {
        const { name, email, password, user } = req.body;
        if (user === "User") {
            const User = await RegisterSche.findOne({ email });
            if (User) {
                res.send({ status: "User Already Exists...!" });
            } else {
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(password, salt);
                const userdata = new RegisterSche({
                    name: name,
                    email: email,
                    password: hashPassword,
                    role: user
                });
                const result = await userdata.save();
                if (result) {
                    res.send({
                        status: true,
                        message: "User Register Successfully...",
                        user
                    })
                }
            }
        } else {
            const User = await TechSupportSche.findOne({ email });
            if (User) {
                res.send({ status: "Tech Support Already Exists...!" });
            } else {
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(password, salt);
                const userdata = new TechSupportSche({
                    name: name,
                    email: email,
                    password: hashPassword,
                    role: user
                });
                const result = await userdata.save();
                if (result) {
                    res.send({
                        status: true,
                        message: "Tech Support Register Successfully...",
                        user
                    })
                }
            }
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error From Register Controller",
            Error: `Error is ${error}`,
        });
    }
};

export default RegisterCon;
