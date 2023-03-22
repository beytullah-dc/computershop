import "./laptops.card.component.scss";
import { database } from "../../../database/database";

const LaptopsCard = ({ searchParameters }) => {
  const { priceMin, priceMax, brand, gpuGenre } = searchParameters;
  return database.laptops.map(
    ({ id, name, price, description, image, laptopbrand, laptopgpuGenre }) => {
      if (price >= priceMin && price <= priceMax) {
        if (brand === "all" || brand === laptopbrand) {
          if (gpuGenre === "all" || gpuGenre === laptopgpuGenre) {
            return (
              <div className="col-4 rounded" key={id}>
                <div className="laptops-card-container rounded">
                  <div className="laptops-laptop-name rounded ">{name}</div>
                  <img
                    className="rounded"
                    src="https://www.trurocomputerservices.co.uk/wp-content/uploads/2021/03/gaming-pc-truro.jpg"
                    alt={image}
                  ></img>
                  <div className="laptops-laptop-description rounded">
                    {description}
                  </div>
                  <div className="laptops-laptop-price rounded">
                    Price: {price}$
                  </div>
                </div>
              </div>
            );
          }
        }
      }
      return false;
    }
  );
};

export default LaptopsCard;
