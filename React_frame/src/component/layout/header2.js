import React from 'react';
import {Link} from 'react-router-dom';
import '../../App'
// import {Link } from 'react-scroll';
function header_2() {
    return (
        <header style = {headerStyle}>
            <Link style = {linkStylehead} to = "/">𝓝𝓤𝓢 𝓕𝓸𝓸𝓭</Link>
            {/* <Link style = {linkStyle} to = "/outlets" className = "Linkbtn"activeStyle = {{color: "rgb(221, 160, 95)"}} >Food Outlets |</Link>          
            <Link style = {linkStyle} to = "/:campuses" className = "Linkbtn" activeStyle = {{color: "rgb(221, 160, 95)"}}>Explore |</Link> 
            <Link style = {linkStyle} to = "/aboutus" className = "Linkbtn" activeStyle = {{color: "rgb(221, 160, 95)"}}>About us |</Link>  */}
            <Link style = {linkStyle}to="/" className = "Linkbtn" activeStyle = {{color: "rgb(221, 160, 95)"}}>Home</Link>

        </header>
    )
}
const headerStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    background: '#EF7C00',
}

const linkStyle = {
    color: '#fff',
    textAlign: 'center',
    float: 'right'   
}
const linkStylehead = {
    color: '#fff',
    float: 'left',
    padding: '10px'
}
export default header_2;