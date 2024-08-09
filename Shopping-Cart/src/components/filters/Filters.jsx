import { useId } from 'react';
import './Filters.css'
import { useFilters } from '../../hooks/useFilters';

const Filters = () => {
  const { filters, setFilters } = useFilters()
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleMinPriceChange = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleCategoryChange = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters' >
      <div>
        <label htmlFor={minPriceFilterId}>Minimum Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min='0'
          max='3000'
          onChange={handleMinPriceChange}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section >
  )
};

export default Filters; 