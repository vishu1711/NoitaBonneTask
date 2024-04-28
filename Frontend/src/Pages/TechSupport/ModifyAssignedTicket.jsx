import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Layout from '../../Commponent/Layout';

const ModifyAssignedTicket = () => {

    const auth = JSON.parse(localStorage.getItem("user"));
    const techid = auth._id;

    const navigate = useNavigate();

    const [assignticketid, setassignticketid] = useState("");
    const [techname, settechname] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("")
    const [status, setstatus] = useState("");
    const [createdAt, setcreatedAt] = useState("")
    const [filename, setfilename] = useState("");
    const [answer, setanswer] = useState("");
    const [file, setfile] = useState("");

    useEffect(() => {
        setassignticketid(localStorage.getItem("assignticketid"));
        settechname(localStorage.getItem("techname"));
        settitle(localStorage.getItem("title"));
        setdescription(localStorage.getItem("description"));
        setstatus(localStorage.getItem("status"));
        setcreatedAt(localStorage.getItem("createdAt"));
        setfilename(localStorage.getItem("filename"));
    }, []);

    const handleform = async (e) => {
        e.preventDefault();
        if (!answer) {
            alert("Please Fill The All Filed...!");
        } else {
            const formdata = new FormData();
            formdata.append('techid', techid);
            formdata.append('title', title);
            formdata.append('techname', techname);
            formdata.append('description', description);
            formdata.append('status', status);
            formdata.append('createdAt', createdAt);
            formdata.append('answer', answer);
            formdata.append('filename', filename);
            formdata.append('file', file);
            await axios.post("http://localhost:2030/NoitaVonne/Task/api/resolve/ticket",
                formdata
            ).then((res) => {
                if (res) {
                    alert("Answer Ticket Successfully...");
                    setfile(""); setassignticketid(""); settitle(""); setdescription(""); setstatus("");
                    setcreatedAt(""); setanswer(""); setfilename("");
                    localStorage.removeItem('filename');
                    localStorage.removeItem('title');
                    localStorage.removeItem('description');
                    localStorage.removeItem('status');
                    localStorage.removeItem('createdAt');
                    navigate("/AssignedTickets");
                    removeresolveticket();
                }
            }).catch((err) => {
                console.log(`Error From Modify Answer Ticket Page ${err}`);
            });
        };
    };

    const removeresolveticket = async () => {
        await axios.delete(`http://localhost:2030/NoitaVonne/Task/api/delete/assign/resolve/ticket/${assignticketid}`)
            .then(() => {
            }).catch((err) => {
                console.log(`Error Form Ticket Delete function ${err}`);
            })
    }

    return (
        <>
            <Layout>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 my-2 border border-2 border-dark rounded">
                            <form onSubmit={handleform}>
                                <div className="d-flex flex-wrap justify-content-center shadow ">
                                    <div className='my-1 p-3 border border-2'>
                                        <div class="card-body">
                                            <h5 class="card-title ">Title
                                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;: {title}</h5>
                                            <div>
                                                <h5>Description : {description}</h5>
                                                <h5>CreatedAt &nbsp;&nbsp; : {createdAt}</h5>
                                            </div>
                                        </div>
                                        <div class="card shadow"  style={{ width: "30rem", height: "auto" }}>
                                            <img src={`http://localhost:2030/Public/Files/` + filename}
                                                class="card-img-top img-thumbnail"  alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex m-1">
                                    <div><h4>Status :-</h4></div>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary ms-3  dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {status}
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li onClick={(e) => setstatus("Open")}>Open</li>
                                            <li onClick={(e) => setstatus("Close")}>Close</li>
                                            <li onClick={(e) => setstatus("Resolve")}>Resolve</li>
                                        </ul>
                                    </div>
                                </div>
                                <textarea placeholder='Answer To Ticket...' rows={3} cols={10}
                                    onChange={(e) => setanswer(e.target.value)}
                                    value={answer} className='form-control fw-bold shadow border-3' />
                                <input type="file" accept=".jpg, .jpeg, .png"
                                    onChange={(e) => setfile(e.target.files[0])} id="imagefile"
                                    className='form-control mb-1 fw-bold shadow border-3' />
                                <button className="btn btn-secondary border offset-sm-5 " type='submit'>
                                    Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ModifyAssignedTicket
