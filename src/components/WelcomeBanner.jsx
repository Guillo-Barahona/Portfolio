import ButtonP from "./ButtonP";
import 'animate.css';


const WelcomeBanner = () => {
    
    return (
        <div className="container-fluid WelcomeBanner">
            
            <div className="row py-5">
                <div className="col text-center">
                    
                    <div className="mb-auto py-2" ><h1 className="animate__animated animate__fadeInLeft">Bienvenido</h1></div>
                        <div className="mb-auto p-2 animate__animated animate__fadeInRight">
                            <h2>A mi Portafolio de</h2>
                                <div className="typer_container">
                                    <div className="typed-out fs-4">Desarrollador Web </div>
                                </div>
                        </div>
                </div>
            </div>

            <div className="row  py-5">
                <div className="col animate__animated animate__slideInUp">
                    <a href="#anchor_projects" className="text-decoration-none"><ButtonP value={"Ir al Portafolio"}></ButtonP></a> 
                </div>
            </div>

        </div>
    )
}

export default WelcomeBanner;
