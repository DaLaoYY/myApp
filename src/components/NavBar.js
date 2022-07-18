import React from 'react'


function NavBar() {
    return (
        <div>
            <nav className="nav nav-tabs">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="navbar-brand" href="#">HomePage</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar