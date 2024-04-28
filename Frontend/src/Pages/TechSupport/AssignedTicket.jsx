import React, { useState, useEffect } from 'react';
import axios from "axios";
import ticket from "../../img/productCard.jpg";
import { useNavigate } from 'react-router-dom';
import Layout from '../../Commponent/Layout';

const AssignedTickets = () => {

    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem("user"));
    const id = auth._id;
    const techname = auth.name;
    const [data, setData] = useState([]);

    const TicketAssignedData = async () => {
        await axios.get(`http://localhost:2030/NoitaVonne/Task/api/assignedticket/techsupport/${id}`)
            .then((res) => {
                if (res.data) {
                    setData(res.data.result);
                }
            }).catch((err) => {
                console.log(`Error From Tech Ticket Assigned Page : ${err}`);
            })
    }

    useEffect(() => {
        TicketAssignedData();
    }, []);

    const modifyTicket = (id, title, description, status, createdAt, filename) => {
        localStorage.setItem('assignticketid', id);
        localStorage.setItem('title', title);
        localStorage.setItem('description', description);
        localStorage.setItem('status', status);
        localStorage.setItem('createdAt', createdAt);
        localStorage.setItem('filename', filename);
        localStorage.setItem('techname', techname);
        navigate("/ModifyAssignedTicket");
    }

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col mt-3">
                            <h1 className='text-center'>Ticket's</h1>
                            <div className="d-flex flex-wrap justify-content-center shadow ">
                                {
                                    data ?
                                        <>
                                            {
                                                data.map((itm) => {
                                                    return (
                                                        <>
                                                            <div className='m-3  p-3 border border-2'
                                                                onClick={() =>
                                                                    modifyTicket(itm._id, itm.title, itm.description, itm.status,
                                                                        itm.createdAt, itm.file.filename)}>
                                                                <div class="card-body">
                                                                    <h5 class="card-title ">Title
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;: {itm.title}</h5>
                                                                    <div>
                                                                        <h5>Description : {itm.description}</h5>
                                                                        <h5>Status &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; : {itm.status}</h5>
                                                                        <h5>CreatedAt &nbsp;&nbsp; : {itm.createdAt}</h5>
                                                                    </div>
                                                                </div>
                                                                <div class="card shadow" style={{ width: "30rem", height: "auto" }}>
                                                                    {
                                                                        itm.file ?
                                                                            <img src={`http://localhost:2030/Public/Files/` + itm.file.filename}
                                                                                class="card-img-top img-thumbnail" alt="..." />
                                                                            :
                                                                            <img src={ticket} class="card-img-top img-thumbnail" alt="..." />
                                                                    }
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </>
                                        :
                                        <>
                                            <h1>No data : Please Create New Ticket First...</h1>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default AssignedTickets;
