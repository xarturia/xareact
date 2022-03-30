import IMAGES from './images';
const About = ()=>{
    return (
        <section className="about" id="about">

        <h1 className="heading">Acerca de la App</h1>

        <div className="row">

            <div className="image aboutimg">
                <img src={IMAGES.appMockupSmall} alt="app mockup"></img>
            </div>

            <div className="content">
                <h3 className="about_title">échale un vistazo a nuestra app</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus labore perspiciatis iusto
                    debitis, explicabo neque earum accusamus adipisci eius, nobis laboriosam, autem modi porro quisquam
                    saepe assumenda fuga quod ipsa!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rerum excepturi alias quas
                    voluptatibus provident voluptatum sapiente quos enim praesentium?</p>
                <div className="buttons">
                    <a href="#"><img src={IMAGES.googleBtn} alt="Google Playstore"></img></a>
                    <a href="#"><img src={IMAGES.appStoreBtn} alt="Appstore"></img></a>
                </div>
            </div>
        </div>

    </section>
    );
}
export default About;