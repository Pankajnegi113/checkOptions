import React, { Component } from 'react'
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="nav-wrapper blue">
                        <div className="container">
                        <span className='brand-logo left'>
                            Logo
                        </span>
                        <ul className='right'>
                            <li>
                                <span to={'/'} className="nav-link">
                                    Home
                                </span>
                            </li>
                            <li>
                                <span to={'/'} className="nav-link">
                                    My PortFolio
                                </span>
                            </li>
                            <li>
                                <span to={'/'} className="nav-link">
                                    Clients
                                </span> 
                            </li>
                            <li>
                                <span to={'/'} className="nav-link">
                                    Get in Touch
                                </span> 
                            </li>
                        </ul>
                        </div>
                    </nav>
            </div>
        )
    }
}

export default Navbar
