import React, { useState, useEffect } from "react";
import Portfolio2 from "../Items/Portfolio2";

const filters = [
  { id: 1, name: "All Projects" },
  { id: 2, name: "Websites" },
  { id: 3, name: "Dashboards" },
  { id: 4, name: "Landing Pages" },
  { id: 5, name: "Email Templates" },
];

const allData = [...]; // ضع بيانات المشاريع هنا

function Portfolios2() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(8);
  const [activeFilter, setActiveFilter] = useState(filters[0].name.toLowerCase());
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    filterItems(activeFilter);
  }, []);

  const filterItems = (filter) => {
    let filteredData;
    if (filter === filters[0].name.toLowerCase()) {
      filteredData = getAllItems;
    } else {
      filteredData = getAllItems.filter((data) => data.category.includes(filter));
    }
    setVisibleItems(filteredData.slice(0, 8));
    setDataVisibleCount(8);
    setNoMorePost(filteredData.length <= 8);
  };

  const handleChange = (e) => {
    e.preventDefault();
    let targetFilter = e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    filterItems(targetFilter);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + 4;
    let filteredData = activeFilter === filters[0].name.toLowerCase()
      ? getAllItems
      : getAllItems.filter((data) => data.category.includes(activeFilter));
    
    setDataVisibleCount(tempCount);
    setVisibleItems(filteredData.slice(0, tempCount));
    setNoMorePost(tempCount >= filteredData.length);
  };

  return (
    <>
      <ul className="portfolio-filter list-inline fadeIn delay_ms_3">
        {filters.map((filter) => (
          <li
            className={filter.name.toLowerCase() === activeFilter ? "list-inline-item mb-2 current" : "list-inline-item mb-2"}
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="row portfolio-wrapper fadeIn delay_ms_5">
        {visibleItems.map((item) => (
          <div className="col-sm-6 col-md-4 col-xl-3  grid-item" key={item.id}>
            <Portfolio2 portfolio={item} />
          </div>
        ))}
      </div>

      {!noMorePost && (
        <div className="load-more text-center mt-4 fadeIn delay_ms_7">
          <a href="#!" className="btn btn-default" onClick={handleLoadmore}>
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios2;
