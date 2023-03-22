import "./computers.category.component.scss";

const ComputersCategory = ({
  setBrand,
  setGpuGenre,
  setPriceMax,
  setPriceMin,
}) => {
  return (
    <div className="computers-category-container w-75 rounded">
      <div className="row justify-content-evenly text-center">
        <div className="col-1 col-form-label">Brand:</div>
        <div className="col-2">
          <select
            className="computers-category-brand w-100 h-100 form-select"
            onChange={(event) => setBrand(event)}
          >
            <option value="all">All</option>
            <option value="asus">Asus</option>
            <option value="msi">MSI</option>
            <option value="lenovo">Lenovo</option>
            <option value="dell">Dell</option>
          </select>
        </div>
        <div className="col-1 col-form-label">GPU Genre:</div>
        <div className="col-2">
          <select
            className="computers-category-gpu-genre w-100 h-100 form-select"
            onChange={(event) => setGpuGenre(event)}
          >
            <option value="all">All</option>
            <option value="nvidia">Nvidia</option>
            <option value="amd">AMD</option>
          </select>
        </div>
        <div className="col-1 col-form-label">Price(Min):</div>
        <div className="col-2">
          <input
            className="computers-category-price-min rounded w-100 h-100 form-control"
            type="number"
            placeholder="Minimum : 0"
            onChange={(event) => setPriceMin(event)}
          ></input>
        </div>
        <div className="col-1 col-form-label">Price(Max):</div>
        <div className="col-2">
          <input
            className="computers-category-price-max rounded w-100 h-100 form-control"
            type="number"
            placeholder="Maksimum : 20000"
            onChange={(event) => setPriceMax(event)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ComputersCategory;
