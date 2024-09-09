import ButtonP from "./ButtonP";
import useIntersectionObserver from "./useIntersectionObserver";

const Projects = () => {

    document.addEventListener("DOMContentLoaded", useIntersectionObserver(".hidden3"));

    return (
        <div className="projects" id="anchor_projects">
            <div className="container-fluid py-4 pb-0">
                <div className="row projectsTitle">
                    <div className=" col container-fluid d-flex justify-content-center">
                        <h1>Algunos de mis Proyectos</h1>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-0 pb-0 ">
                <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">

                        <div className="col-md-4">
                            <a href="https://guillo-barahona.github.io/Ricordi_Pizza/index.html" target="_blank" className="project project-tile text-decoration-none">
                                <div className="hidden3 card" >
                                    <img src="/images/ricordi.png" className="card-img-top" alt="ricordi"></img>
                                    <div className="card-body">
                                        <p className="card-text">Landing page "Ricordi Pizza"</p>
                                        <p className="text-muted">Html | Css | Sass</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://guillo-barahona.github.io/Pokemon_Team_Randomizer/" target="_blank" className="project project-tile text-decoration-none">
                                <div className="hidden3 card" >
                                    <img src="/images/pokemonRandom.png" className="card-img-top" alt="PokemonRandomizer"></img>
                                    <div className="card-body">
                                        <p className="card-text">"Pokemon Team Randomizer"</p>
                                        <p className="text-muted">Html | Css | Bootstrap | Js</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://azuli-mx.web.app/" target="_blank" className="project project-tile text-decoration-none">
                                <div className="hidden3 card" >
                                    <img src="/images/azuli.png" className="card-img-top" alt="azuliMx"></img>
                                    <div className="card-body">
                                        <p className="card-text">E-commerce "Azuli Mx"</p>
                                        <p className="text-muted">Javascript | React Js</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://guillo-barahona.github.io/To-do-List-App/" target="_blank" className="project project-tile text-decoration-none">
                                <div className="card" >
                                    <img src="/images/ToDo.png" className="card-img-top" alt="toDo"></img>
                                    <div className="card-body">
                                        <p className="card-text">To Do List App</p>
                                        <p className="text-muted">Javascript</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://coderhouse-ecommerce1.web.app/" target="_blank" className="project project-tile text-decoration-none">
                                <div className="card" >
                                    <img src="/images/dipay.png" className="card-img-top" alt="dipay"></img>
                                    <div className="card-body">
                                        <p className="card-text">E-commerce "Dipay"</p>
                                        <p className="text-muted">Javascript | React Js</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://guillo-barahona.github.io/Music-Player/" target="_blank" className="project project-tile text-decoration-none">
                                <div className="card" >
                                    <img src="/images/MusicPlayer.png" className="card-img-top" alt="portfolio"></img>
                                    <div className="card-body">
                                        <p className="card-text">Music Player</p>
                                        <p className="text-muted">Html | Css | Js</p>
                                    </div>
                                </div>
                            </a>

                    </div>
                </div>
            </div>


            <div className="container-fluid pt-2 pb-2">
                <div className="row">
                    <div className="col container-fluid d-flex justify-content-center">
                        <div className="container d-flex justify-content-center">
                                <a href="https://github.com/Guillo-Barahona" target="_blank" className="text-decoration-none"><ButtonP value={"Ir a GitHub"}></ButtonP></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;