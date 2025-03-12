import React, { useState, useEffect } from "react";
import Portfolio2 from "../Items/Portfolio2";

const filters = [
  { id: 1, name: "All Projects" },
  { id: 2, name: "Websites" },
  { id: 3, name: "Dashboards" },
  { id: 4, name: "Landing Pages" },
  { id: 5, name: "Email Templates" },
];

const allData = [
  // بيانات المشاريع هنا
];

function Portfolios2() {
  const [activeFilter, setActiveFilter] = useState(filters[0].name.toLowerCase());
  const [visibleItems, setVisibleItems] = useState([]);
  const [dataVisibleCount, setDataVisibleCount] = useState(8);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    filterItems(filters[0].name.toLowerCase());
  }, []);

  const filterItems = (filter) => {
    let filteredData =
      filter === "all projects"
        ? allData
        : allData.filter((item) => item.category.includes(filter));

    setActiveFilter(filter);
    setVisibleItems(filteredData.slice(0, 8));
    setDataVisibleCount(8);
    setNoMorePost(filteredData.length <= 8);
  };

  const handleChange = (e) => {
    let selectedFilter = e.target.textContent.toLowerCase();
    filterItems(selectedFilter);
  };

  const handleLoadMore = () => {
    let filteredData =
      activeFilter === "all projects"
        ? allData
        : allData.filter((item) => item.category.includes(activeFilter));

    let newCount = dataVisibleCount + 4;
    setDataVisibleCount(newCount);
    setVisibleItems(filteredData.slice(0, newCount));
    setNoMorePost(newCount >= filteredData.length);
  };

  return (
    <>
      <ul className="portfolio-filter list-inline fadeIn delay_ms_3">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item mb-2 current"
                : "list-inline-item mb-2"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="row portfolio-wrapper fadeIn delay_ms_5">
        {visibleItems.map((item) => (
          <div className="col-sm-6 col-md-4 col-xl-3 grid-item" key={item.id}>
            <Portfolio2 portfolio={item} />
          </div>
        ))}
      </div>

      {!noMorePost && (
        <div className="load-more text-center mt-4 fadeIn delay_ms_7">
          <button className="btn btn-default" onClick={handleLoadMore}>
            <i className="fas fa-circle-notch"></i> Load more
          </button>
        </div>
      )}
    </>
  );
}

export default Portfolios2;
