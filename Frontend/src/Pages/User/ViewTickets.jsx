import React, { useState, useEffect } from 'react';
import axios from "axios";
import ticket from "../../img/productCard.jpg";
import Layout from '../../Commponent/Layout';

const ViewTickets = () => {

    const [data, setdata] = useState([]);

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
    }, [])

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
                                                                        {/* <h5>Status &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; : {itm.status}</h5> */}
                                                                        <h5>CreatedAt &nbsp;&nbsp; : {itm.createdAt}</h5>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex m-1">
                                                                    <div><h5>Status :-</h5></div>
                                                                    <div class="dropdown">
                                                                        <button class="btn btn-light fw-bold ms-3  dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            {itm.status}
                                                                        </button>
                                                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                            <li onClick={(e) => changeStatus("Open", itm._id)}>Open</li>
                                                                            <li onClick={(e) => changeStatus("Close", itm._id)}>Close</li>
                                                                            <li onClick={(e) => changeStatus("Resolve", itm._id)}>Resolve</li>
                                                                        </ul>
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

export default ViewTickets
