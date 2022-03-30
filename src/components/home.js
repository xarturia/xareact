const Home = () => {
    return (
        <>
            <section className="home" id="home">
                <div className="content">
                    <h3>Xarturia! Anime streaming app</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore similique eos harum atque omnis ex
                        consectetur, assumenda sunt ad facilis illum quaerat doloremque. Aut eveniet culpa enim suscipit ullam!
                    </p>
                    <a href="#pricing" className="btn">Empieza ahora</a>
                </div>

                <div className="swiper-container image-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="/images/index/sc-anime-dir.jpg" alt=""></img></div>
                        <div className="swiper-slide"><img src="images/index/sc-anime-profile.jpg" alt=""></img></div>
                        <div className="swiper-slide"><img src="images/index/sc-config.jpg" alt=""></img></div>
                        <div className="swiper-slide"><img src="images/index/sc-easter-egg.jpg" alt=""></img></div>
                        <div className="swiper-slide"><img src="images/index/sc-lateral.jpg" alt=""></img></div>
                        <div className="swiper-slide"><img src="images/index/sc-main-ep-list.jpg" alt=""></img></div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;