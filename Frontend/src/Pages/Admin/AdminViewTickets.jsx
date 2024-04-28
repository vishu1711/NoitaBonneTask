import React, { useState, useEffect } from 'react';
import axios from "axios";
import ticket from "../../img/productCard.jpg";
import Layout from '../../Commponent/Layout';

const AdminViewTickets = () => {

    const [data, setdata] = useState([]);
    const [techdata, settechdata] = useState([]);

    function getData() {
        axios.get("http://localhost:2030/NoitaVonne/Task/api/viewtickets"
        ).then((res) => {
            setdata(res.data.data);
        }).catch((err) => {
            console.log(`Error From View Tickets List Page ${err}`);
        })
    }
    useEffect(() => {
        getData();
        getTechData();
    }, [])

    const Delete = async (id) => {
        await axios.delete(`http://localhost:2030/NoitaVonne/Task/api/deleteticket/${id}`)
            .then(() => {
                getData();
            }).catch((err) => {
                console.log(`Error Form Ticket Delete function ${err}`);
            })
    }

    const changeStatus = async (status, id) => {
        await axios.put(`http://localhost:2030/NoitaVonne/Task/api/changestatus/ticket/${id}`,
            {
                status: status
            })
            .then((response) => {
                alert("Status updated successfully..!");
                getData();
            }).catch((err) => {
                console.log(`Error From All Ticket List Change Status : ${err}`);
            })
    }

    function getTechData() {
        axios.get("http://localhost:2030/NoitaVonne/Task/api/viewtechdata"
        ).then((res) => {
            settechdata(res.data.data);
        }).catch((err) => {
            console.log(`Error From Get Tech Support Data From Admin View Page ${err}`);
        })
    }

    const assigntech = async (techid, ticketid, title, description, status, createdAt, file) => {
        await axios.post("http://localhost:2030/NoitaVonne/Task/api/assignticket/techsupport",
            {
                techid: techid,
                ticketid: ticketid,
                title: title,
                description: description,
                status: status,
                createdAt: createdAt,
                file: file
            }
        ).then((res) => {
            if (res) {
                alert("Assign Ticket Successfully...");
            }
        }).catch((err) => {
            console.log(`Error From Add Ticket Page ${err}`);
        });
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
                                                            <div className='m-3  p-3 border border-2'>
                                                                <div class="card-body">
                                                                    <h5 class="card-title ">Title
                                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;: {itm.title}</h5>
                                                                    <div>
                                                                        <h5>Description : {itm.description}</h5>
                                                                        <h5>Status &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; : {itm.status}</h5>
                                                                        <h5>CreatedAt &nbsp;&nbsp; : {itm.createdAt}</h5>
                                                                    </div>
                                                                </div>
                                                                <div className='d-flex flex-row'>
                                                                    <div onClick={() => { if (window.confirm("Are You Sure To Delete Data...!")) { Delete(itm._id) } }}>
                                                                        <i className='bx bx-trash fs-2 text-danger'></i></div>
                                                                    <div class="dropdown">
                                                                        <button class="btn btn-secondary ms-3  dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            Status List
                                                                        </button>
                                                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                            <li onClick={(e) => changeStatus("Open", itm._id)}>Open</li>
                                                                            <li onClick={(e) => changeStatus("Close", itm._id)}>Close</li>
                                                                            <li onClick={(e) => changeStatus("Resolve", itm._id)}>Resolve</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="dropdown">
                                                                        <button class="btn btn-secondary ms-3  dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            Assign_To
                                                                        </button>
                                                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                            {
                                                                                techdata.map((itme) => {
                                                                                    return (
                                                                                        <>
                                                                                            <li onClick={() =>
                                                                                                assigntech(itme._id, itm._id, itm.title, itm.description,
                                                                                                    itm.status, itm.createdAt, itm.file)}>
                                                                                                {itme.name}
                                                                                            </li>
                                                                                        </>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="card shadow mt-2"  style={{ width: "30rem", height: "auto" }}>
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

export default AdminViewTickets
