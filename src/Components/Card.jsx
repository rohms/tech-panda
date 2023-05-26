import panda from "../assets/panda.png";

const Card = ({ image, title, description, buttonLabel, buttonLink }) => {
  return (
    <>
      <div className="card-cont card position-relative">
        <img src={image} className="card-img-top card-img" alt="..." />
        <div className="card-body h-100">
          <h5 className="card-title">{title}</h5>
          <p className="card-text fs-6 flex-grow-1">{description}</p>
          <a
            href={buttonLink}
            className="btn btn-primary position-absolute bottom-0 end-0 mb-3 me-3 mt-2"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </>
  );
};

export { Card };
