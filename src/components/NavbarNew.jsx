import logo from "../assets/SandboxLogo.min.jpg"


function Navbar(){
    return(
        
        <div className="Navbar">
            <div className="logo">
                <a href=""><img src={logo} alt="" /></a>
                <span>SANDBOX</span>
            </div>
            
            <ul className="nav-links">
                <li><a href="">Home</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Members</a></li>
                <li><a href="">Collaborations</a></li>
                <li><a href="">Access</a></li>
                <li><a href="">FAQs</a></li>
            </ul>
        </div>
    )
}

export default Navbar