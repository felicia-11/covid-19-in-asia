import React from 'react';
import './HeaderComponent.css';

/**
 * Component for header / navbar
 */
class HeaderComponent extends React.Component {
    render(){
        return(
            <nav className="navbar fixed-top navbar-dark navbar-bg">
                <a className="navbar-brand" href="#home">
                    <img src={'./assets/images/covid-19-in-asia-logo.png'} width="30" height="30" alt="" />
                    <span> COVID-19 in Asia</span>
                </a>
                <ul className="navbar-list">
                    <li><a className="nav-link" href="#symptoms">Symptoms</a></li>
                    <li><a className="nav-link" href="#prevention">Prevention</a></li>
                    <li><a className="nav-link" href="#top-10">Top 10</a></li>
                    <li><a className="nav-link" href="#home">Home</a></li>
                </ul>
            </nav>
        )
    }
}

export default HeaderComponent;