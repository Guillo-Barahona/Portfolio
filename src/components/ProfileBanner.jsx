import Docu from "/CV_GUILLERMO_BARAHONA.pdf"

const ProfileBanner = () => {



    return(

        
        
        <div className="ProfileBanner container-fluid" id="anchor_profile">

<div className="custom-shape-divider-top-1712947828">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>


            <div className="row">
                <div className="hidden1 col-md-4 p-4 justify-content-center d-flex">
                    <img className="profile_img" src="/images/profile2_img.jpg" alt="profile_img"/>
                </div>

                    <div className="col-md-8 align-content-center">
                        <div className="hidden2 profile_square">
                            <div className="container text-center p-4">
                                <h1>Hola, soy Guillermo Barahona</h1>
                                <h2>Front-end Developer</h2>
                            </div>
                            <div className="container">
                                <p>My passion is web development and I have learned to use the front-end technology React to create dynamic and interactive user interfaces. I feel very comfortable working in a team and enjoy facing new challenges to improve my skills. I like to stay up-to-date on the latest trends and technologies in the programming world, and I am eager to continue learning and growing in my career.</p>
                                <div className="text-center p-1 d-flex justify-content-center container">
                                    <a href={Docu} /* download="CV-Guillermo_Barahona" */ tabIndex={0} target={"_blank"}><button className="botonDescarga btn btn-light p-2">Descargar CV
                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadIcon" width={25}><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path></svg>
                                    </button></a>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
            </div>


            <div class="custom-shape-divider-bottom-1712948696">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 1 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>





        </div>
    )
}

export default ProfileBanner;