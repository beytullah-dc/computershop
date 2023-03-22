import "./accessories.card.component.scss";
import { database } from "../../../database/database";

const AccessoriesCard = ({ searchParameters }) => {
  const { priceMin, priceMax, category } = searchParameters;
  return database.accessories.map(
    ({ id, name, price, description, image, accessorycategory }) => {
      if (price >= priceMin && price <= priceMax) {
        if (category === "all" || category === accessorycategory) {
          return (
            <div className="col-4 rounded" key={id}>
              <div className="accessories-card-container rounded">
                <div className="accessories-accessory-name rounded ">
                  {name}
                </div>
                <img
                  className="rounded"
                  src="https://www.trurocomputerservices.co.uk/wp-content/uploads/2021/03/gaming-pc-truro.jpg"
                  alt={image}
                ></img>
                <div className="accessories-accessory-description rounded">
                  {description}
                </div>
                <div className="accessories-accessory-price rounded">
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

export default AccessoriesCard;
