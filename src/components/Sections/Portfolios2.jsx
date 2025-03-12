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
  { id: 1, name: "LoBox", category: ["landing pages"], image: "images/lobox/home.jpg", slug: "lobox" },
  { id: 2, name: "RSSA, Radiological Society of Saudi Arabia", category: ["websites"], image: "images/rssa/home.jpg", slug: "rssa" },
  { id: 3, name: "Crypto Currencies Dashboard", category: ["dashboards"], image: "images/trPay/home.jpg", slug: "trPayUser" },
  { id: 8, name: "Email", category: ["email templates"], image: "images/email1/home.jpg", slug: "email1" },
  { id: 10, name: "Krogarna Dashboard", category: ["dashboards"], image: "images/educationDash/home.jpg", slug: "educationDash" },
  { id: 18, name: "Saudi food & drug authority Dashboard", category: ["dashboards"], image: "images/product/home.jpg", slug: "product" },
  { id: 19, name: "Lawyers Dashboard", category: ["dashboards"], image: "images/lawyer/home.jpg", slug: "lawyer" },
  { id: 25, name: "Email", category: ["email templates"], image: "images/email2/home.jpg", slug: "email2" },
];

function Portfolios2() {
  const [dataVisibleCount, setDataVisibleCount] = useState(8);
  const [activeFilter, setActiveFilter] = useState(filters[0].name.toLowerCase());
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setVisibleItems(allData.slice(0, 8)); // عرض أول 8 عناصر عند تحميل الصفحة
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    let targetFilter = e.target.textContent.toLowerCase();
    
    setActiveFilter(targetFilter);
    setDataVisibleCount(8); // إعادة ضبط العدد المعروض

    let filteredData =
      targetFilter === filters[0].name.toLowerCase()
        ? allData.slice(0, 8)
        : allData.filter((item) => item.category.includes(targetFilter)).slice(0, 8);

    setVisibleItems(filteredData);
    setNoMorePost(filteredData.length < 8);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + 4;
    setDataVisibleCount(tempCount);

    let moreItems =
      activeFilter === filters[0].name.toLowerCase()
        ? allData.slice(0, tempCount)
        : allData.filter((item) => item.category.includes(activeFilter)).slice(0, tempCount);

    setVisibleItems(moreItems);
    setNoMorePost(moreItems.length >= allData.filter((item) => item.category.includes(activeFilter)).length);
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
          <div className="col-sm-6 col-md-4 col-xl-3 grid-item" key={item.id}>
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
