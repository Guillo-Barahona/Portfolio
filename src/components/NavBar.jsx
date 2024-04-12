
    const NavBar = () => {


        return (

            <div className="Header fixed-top">
                    <div className="container-fluid">
                        <div className="row">
                                        <nav className="navbar navbar-expand-lg">

                                                <div className="col-md-3">
                                                    <a className="navbar-brand" href="#"><img className="logo" src="/images/gb_logo.png" alt="gb_logo"></img></a>
                                                </div>
                                                
                                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                                </button>

                                                <div className="col-md-6 collapse navbar-collapse justify-content-center navBarElements" id="navbarNav">
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item mx-3">
                                                        <a className="nav-link" aria-current="" href="#anchor_profile">Acerca de mi</a>
                                                        </li>
                                                        <li className="nav-item mx-3">
                                                        <a className="nav-link" href="#anchor_skills">Herramientas</a>
                                                        </li>
                                                        <li className="nav-item mx-3">
                                                        <a className="nav-link" href="#anchor_projects">Proyectos</a>
                                                        </li>
                                                    </ul>                                                
                                                </div>

                                                <div className="col-md-3 collapse navbar-collapse justify-content-end" id="navbarNav">
                                                    <ul className="navbar-nav icons">
                                                        <li className="nav-item mx-1 hoverZoom">
                                                        <a href={"https://www.instagram.com/guillo_barahona"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/images/instagram_logo.png"} alt="Instagram" width={30} /></a>
                                                        </li>
                                                        <li className="nav-item mx-1 hoverZoom">
                                                        <a href={"https://github.com/Guillo-Barahona"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/images/github_logo.png"} alt="GitHub" width={30} /></a>
                                                        </li>
                                                        <li className="nav-item mx-1 hoverZoom">
                                                        <a href={"https://www.linkedin.com/in/guillermo-barahona-li/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"/images/linkedin_logo.png"} alt="Linkedin" width={30} /></a>
                                                        </li>
                                                    </ul>
                                                </div>    
                                            
                                        </nav>
                    </div>
                </div>
            </div>

            




    )
}

export default NavBar;