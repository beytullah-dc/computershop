import "./parts.category.component.scss";

const PartsCategory = ({ setCategory, setPriceMax, setPriceMin }) => {
  return (
    <div className="parts-category-container w-75 rounded">
      <div className="row justify-content-evenly text-center">
        <div className="col-1 col-form-label">Category:</div>
        <div className="col-3">
          <select
            className="parts-category-brand w-100 h-100 form-select"
            onChange={(event) => setCategory(event)}
          >
            <option value="all">All</option>
            <option value="processor">Processor</option>
            <option value="motherboard">Motherboard</option>
            <option value="ram">RAM</option>
            <option value="gpu">GPU</option>
            <option value="case">Case</option>
            <option value="cpucooler">CPU Cooler</option>
            <option value="casefan">Case Fan</option>
            <option value="psu">PSU</option>
            <option value="ssd">SSD</option>
            <option value="hdd">HDD</option>
            <option value="soundcard">Sound Card</option>
          </select>
        </div>
        <div className="col-1 col-form-label">Price(Min):</div>
        <div className="col-3">
          <input
            className="parts-category-price-min rounded w-100 h-100 form-control"
            type="number"
            placeholder="Minimum : 0"
            onChange={(event) => setPriceMin(event)}
          ></input>
        </div>
        <div className="col-1 col-form-label">Price(Max):</div>
        <div className="col-3">
          <input
            className="parts-category-price-max rounded w-100 h-100 form-control"
            type="number"
            placeholder="Maksimum : 20000"
            onChange={(event) => setPriceMax(event)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default PartsCategory;
