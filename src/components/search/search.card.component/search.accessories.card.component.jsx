import "./search.card.component.scss";
import { database } from "../../../database/database";

const SearchAccessoriesCard = ({ search }) => {
  return database.accessories.map(({ id, name, price, description, image }) => {
    if (
      name.toLowerCase().includes(search) ||
      description.toLowerCase().includes(search)
    ) {
      return (
        <div className="col-4 rounded" key={id}>
          <div className="search-card-container rounded">
            <div className="search-search-name rounded ">{name}</div>
            <img
              className="rounded"
              src="https://www.trurocomputerservices.co.uk/wp-content/uploads/2021/03/gaming-pc-truro.jpg"
              alt={image}
            ></img>
            <div className="search-search-description rounded">
              {description}
            </div>
            <div className="search-search-price rounded">Price: {price}$</div>
          </div>
        </div>
      );
    }
    return false;
  });
};

export default SearchAccessoriesCard;
