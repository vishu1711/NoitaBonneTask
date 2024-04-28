import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const auth = JSON.parse(localStorage.getItem("user"));

    const Logout = () => {
        localStorage.clear();
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg nav border-3 shadow ">
                <div className="container-fluid">
                    <div className="d-flex flex-row">
                        <h3 className="fw-bold ms-3 text text-decoration-underline fs-2">#NoitaVonne Task ...</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="text-light nav-link active fs-5 fw-bold" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            {
                                auth ?
                                    <>
                                        {
                                            auth.admin_email === "admin@gmail.com" ?
                                                <>
                                                    <li className="nav-item">
                                                        <Link className="text-light nav-link active fs-5 fw-bold" aria-current="page" to="/AdminViewTickets">
                                                            View Tickets
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="text-light nav-link active fs-5 fw-bold" aria-current="page" to="/ResolveTickets">
                                                            Resolve Tickets
                                                        </Link>
                                                    </li>
                                                </>
                                                :
                                                <>
                                                    {
                                                        auth.role === "User" ?
                                                            <>
                                                                <li className="nav-item">
                                                                    <Link className="text-light nav-link active fs-5 fw-bold" aria-current="page" to="/CreateTicket">
                                                                        Add Ticket
                                                                    </Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link className="text-light nav-link active fs-5 fw-bold" aria-current="page" to="/ViewTickes">
                                                                        View Tickets
                                                                    </Link>
                                                                </li>
                                                            </>
                                                            :
                                                            <>
                                                                <li className="nav-item">
                                                                    <Link className="text-light nav-link active fs-5 fw-bold" aria-current="page" to="/AssignedTickets">
                                                                        Tech_Assigned_Tickets
                                                                    </Link>
                                                                </li>
                                                            </>
                                                    }
                                                </>
                                        }
                                        <li className="nav-item">
                                            <Link onClick={Logout}
                                                className="nav-link active text-light fs-5 fw-bold" to="/">
                                                Logout...</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link fs-5 fw-bold text-light" to="/Login">
                                                Login..<i class='bx bx-log-in fs-5 fw-bold'></i>
                                            </Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
