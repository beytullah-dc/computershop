import "./accessories.category.component.scss";

const AccessoriesCategory = ({ setCategory, setPriceMax, setPriceMin }) => {
  return (
    <div className="accessories-category-container w-75 rounded">
      <div className="row justify-content-evenly text-center">
        <div className="col-1 col-form-label">Category:</div>
        <div className="col-3">
          <select
            className="accessories-category-brand w-100 h-100 form-select"
            onChange={(event) => setCategory(event)}
          >
            <option value="all">All</option>
            <option value="keyboard">Keyboard</option>
            <option value="mouse">Mouse</option>
            <option value="monitor">Monitor</option>
            <option value="headset">Headset</option>
            <option value="laptopcooler">Laptop Cooler</option>
            <option value="mousepad">Mousepad</option>
            <option value="speaker">Speaker</option>
          </select>
        </div>
        <div className="col-1 col-form-label">Price(Min):</div>
        <div className="col-3">
          <input
            className="accessories-category-price-min rounded w-100 h-100 form-control"
            type="number"
            placeholder="Minimum : 0"
            onChange={(event) => setPriceMin(event)}
          ></input>
        </div>
        <div className="col-1 col-form-label">Price(Max):</div>
        <div className="col-3">
          <input
            className="accessories-category-price-max rounded w-100 h-100 form-control"
            type="number"
            placeholder="Maksimum : 20000"
            onChange={(event) => setPriceMax(event)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesCategory;
