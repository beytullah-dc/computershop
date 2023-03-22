import "./parts.card.component.scss";
import { database } from "../../../database/database";

const PartsCard = ({ searchParameters }) => {
  const { priceMin, priceMax, category } = searchParameters;
  return database.parts.map(
    ({ id, name, price, description, image, partscategory }) => {
      if (price >= priceMin && price <= priceMax) {
        if (category === "all" || category === partscategory) {
          return (
            <div className="col-4 rounded" key={id}>
              <div className="parts-card-container rounded">
                <div className="parts-part-name rounded ">
                  {name}
                </div>
                <img
                  className="rounded"
                  src="https://www.trurocomputerservices.co.uk/wp-content/uploads/2021/03/gaming-pc-truro.jpg"
                  alt={image}
                ></img>
                <div className="parts-part-description rounded">
                  {description}
                </div>
                <div className="parts-part-price rounded">
                  Price: {price}$
                </div>
              </div>
            </div>
          );
        }
      }
      return false;
    }
  );
};

export default PartsCard;
