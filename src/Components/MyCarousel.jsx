import panda from "../assets/spacepanda.jpg";
import head from "../assets/18298.jpg";
import ai from "../assets/aipic.jpg";

const MyCarousel = () => {
  return (
    <div className="container carousel-container">
      <div id="demo" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ai} alt="Los Angeles" className="d-block w-100" />
            <div className="carousel-caption">
              <h3>Nulla exercitation</h3>
              <p>Amet culpa velit officia cupidatat mollit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={head} alt="ai-head" className="d-block w-100" />
            <div className="carousel-caption">
              <h3>Do minim culpa eu</h3>
              <p>
                Ullamco aliqua dolor anim labore ipsum irure nulla deserunt
                aliquip. Aliqua ad magna ipsum adipisicing. Pariatur irure
                aliquip id qui cupidatat exercitation minim. Nulla officia sint
                anim dolor magna aliqua laborum elit deserunt nisi tempor esse.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={panda} className="d-block w-100" alt="space-panda" />
            {/* <a
              hidden
              href="https://www.freepik.com/free-ai-image/panda-bear-space-with-galaxy-background_42055457.htm#query=technology%20panda%20ai&position=7&from_view=search&track=ais"
            >
              Image by Sketchepedia
            </a>{" "} */}
            <div className="carousel-caption">
              <h3>Sit eu reprehenderit exercitation est sint exercitation.</h3>
              <p>
                Aliqua anim aliquip nulla pariatur. Quis consectetur in fugiat
                deserunt aliquip ex ipsum labore.
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export { MyCarousel };
