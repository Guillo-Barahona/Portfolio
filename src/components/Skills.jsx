import { useState } from "react";



const Skills = () => {

    return (
        <div className="skills" id="anchor_skills">
            <div className="container-fluid pt-4 pb-0">
                <div className="row">
                    <div className="col container-fluid d-flex justify-content-center">
                        <h1>Skills</h1>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 container-fluid">
                        <div className="hidden1 d-flex flex-wrap justify-content-around p-5 ">
                            <li className="list-group-item pt-1 hoverZoom"><img src="\images\html.png-d02742a7.png" width={83}></img></li>
                            <li className="list-group-item hoverZoom"><img src="\images\css.png-5a2f1d9c.png" width={100}></img></li>
                            <li className="list-group-item hoverZoom"><img src="\images\javascript.png-2c050ee4.png" width={100}></img></li>
                            <li className="list-group-item hoverZoom"><img src="\images\react.png-e03a3dcb.png" width={100}></img></li>
                            <li className="list-group-item hoverZoom"><img src="\images\sass.png-2e7307f7.png" width={100}></img></li>
                            <li className="list-group-item hoverZoom"><img src="\images\bootstrap.png-bbf89c7d.png" width={100}></img></li>
                            <li className="list-group-item hoverZoom"><img src="\images\git.png-88b201ce.png" width={100}></img></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Skills;