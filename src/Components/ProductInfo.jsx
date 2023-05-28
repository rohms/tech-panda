import { Card } from "./Card";
import { fakeCards } from "../fakecards";
import panda from "../assets/panda.png";

const ProductInfo = () => {
  return (
    <div className="container mb-5">
      <div className="d-flex align-items-center justify-content-center mb-5">
        <h1>Product Info</h1>
      </div>
      <div className="d-flex justify-content-center flex-wrap  gap-5">
        {fakeCards.map((card) => (
          <Card
            key={card.id}
            image={panda}
            title={card.title}
            description={card.description}
            buttonLabel={card.buttonLabel}
            buttonLink={card.buttonLink}
          />
        ))}
      </div>
    </div>
  );
};

export { ProductInfo };
