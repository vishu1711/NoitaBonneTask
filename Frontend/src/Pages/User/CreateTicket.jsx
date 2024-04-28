import React, { useState } from 'react'
import axios from "axios";
import Layout from '../../Commponent/Layout';

const CreateTicket = () => {

    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [file, setfile] = useState("");

    const handleform = async (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Please Fill The All Filed...!");
        } else {
            const formdata = new FormData();
            formdata.append('title', title);
            formdata.append('description', description);
            formdata.append('file', file);
            await axios.post("http://localhost:2030/NoitaVonne/Task/api/ticket",
                formdata
            ).then((res) => {
                if (res) {
                    alert("Add Ticket Successfully...");
                    settitle(""); setdescription(""); setfile("");
                }
            }).catch((err) => {
                console.log(`Error From Add Ticket Page ${err}`);
            });
        };
    };

    return (
        <>
            <Layout>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 my-2 mt-5 border border-2 border-dark rounded">
                            <form onSubmit={handleform}>
                                <h1 className='text-center'>Add Ticket</h1>
                                <input type="text" placeholder='Title' onChange={(e) => settitle(e.target.value)}
                                    value={title} className='form-control mb-3 fw-bold shadow border-3' />
                                <textarea placeholder='Description...' rows={5} cols={10}
                                    onChange={(e) => setdescription(e.target.value)}
                                    value={description} className='form-control mb-3 fw-bold shadow border-3' />
                                <input type="file" accept=".jpg, .jpeg, .png"
                                    onChange={(e) => setfile(e.target.files[0])} id="imagefile"
                                    className='form-control mb-3 fw-bold shadow border-3' />
                                <button className="btn btn-secondary border offset-sm-5 mb-3" type='submit'>
                                    Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default CreateTicket
