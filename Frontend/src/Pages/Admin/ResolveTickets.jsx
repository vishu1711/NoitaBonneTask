import React, { useState, useEffect } from 'react';
import axios from "axios";
import ticket from "../../img/productCard.jpg";
import Layout from '../../Commponent/Layout';

const ResolveTickets = () => {

    const [data, setdata] = useState([]);

    function getData() {
        axios.get("http://localhost:2030/NoitaVonne/Task/api/resolve/ticket"
        ).then((res) => {
            setdata(res.data.data);
        }).catch((err) => {
            console.log(`Error From View Tickets List Page ${err}`);
        })
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col mt-3">
                            <h1 className='text-center'>Resolved Ticket's</h1>
                            <div className="d-flex flex-wrap justify-content-center shadow border border-3">
                                {
                                    data ?
                                        <>
                                            {
                                                data.map((itm) => {
                                                    return (
                                                        <>
                                                            <div className='m-3  p-3 border border-3 border-info'>
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
                                                                            <img src={`http://localhost:2030/Public/Files/` + itm.filename}
                                                                                class="card-img-top img-thumbnail" alt="..." />
                                                                            :
                                                                            <img src={ticket} class="card-img-top img-thumbnail" alt="..." />
                                                                    }
                                                                </div>
                                                                <div className='mt-2'>
                                                                    <h5>Tech Support Name: {itm.techname}</h5>
                                                                    <h5>ResolvedAt &nbsp;&nbsp;: {itm.resolveAt}</h5>
                                                                    <h5>Answer &nbsp;&nbsp;: {itm.answer}</h5>
                                                                </div>
                                                                <h4>Resolved Task Image_</h4>
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

export default ResolveTickets;
