import "./computers.card.component.scss";
import { database } from "../../../database/database";

const ComputersCard = ({ searchParameters }) => {
  const { priceMin, priceMax, brand, gpuGenre } = searchParameters;
  return database.computers.map(
    ({
      id,
      name,
      price,
      description,
      image,
      computerbrand,
      computergpuGenre,
    }) => {
      if (price >= priceMin && price <= priceMax) {
        if (brand === "all" || brand === computerbrand) {
          if (gpuGenre === "all" || gpuGenre === computergpuGenre) {
            return (
              <div className="col-4 rounded" key={id}>
                <div className="computers-card-container rounded">
                  <div className="computers-computer-name rounded ">{name}</div>
                  <img
                    className="rounded"
                    src="https://www.trurocomputerservices.co.uk/wp-content/uploads/2021/03/gaming-pc-truro.jpg"
                    alt={image}
                  ></img>
                  <div className="computers-computer-description rounded">
                    {description}
                  </div>
                  <div className="computers-computer-price rounded">
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

export default ComputersCard;
