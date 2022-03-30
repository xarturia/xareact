import '../CSS/style.css'
const Features = ()=> {
    return(
        <>
            <section className="features" id="features">

                <h1 className="heading">app features</h1>

                <div clasNames="box-container">

                    <div className="box">
                        <i className="fas fa-magic"></i>
                        <h3 className="card-title lightmode">Diseño moderno</h3>
                        <p className="card-text lightmode">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad
                            neque. Voluptatem alias beatae
                            accusamus laudantium nisi assumenda libero.</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-shield-alt"></i>
                        <h3 className="card-title">Protección de Privacidad</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque.
                            Voluptatem alias beatae
                            accusamus laudantium nisi assumenda libero.</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-globe"></i>
                        <h3 className="card-title">Múltiples idiomas</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque.
                            Voluptatem alias beatae
                            accusamus laudantium nisi assumenda libero.</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3 className="card-title">location tracking</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque.
                            Voluptatem alias beatae
                            accusamus laudantium nisi assumenda libero.</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-cogs"></i>
                        <h3 className="card-title">Configuración avanzada</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque.
                            Voluptatem alias beatae
                            accusamus laudantium nisi assumenda libero.</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-headset"></i>
                        <h3 className="card-title">Soporte 24hs </h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim ad neque.
                            Voluptatem alias beatae
                            accusamus laudantium nisi assumenda libero.</p>
                    </div>

                </div>

            </section>
        </>
    );
}
export default Features;