import React, { useState, useEffect } from "react";
import Portfolio2 from "../Items/Portfolio2";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "Websites",
  },
  {
    id: 3,
    name: "Dashboards",
  },
  {
    id: 4,
    name: "Landing Pages",
  },
  {
    id: 5,
    name: "Email Templates",
  },
];

const allData = [
  {
    id: 1,
    name: "dashboards email templates",
    category: ["dashboards"],
    image: "images/hudaUniversity/img2.png",
    slug: "dashboards-email templates",
  },
  {
    id: 2,
    name: "Apple USB",
    category: ["dashboards", "landing pages"],
    image: "images/hudaUniversity/img2.png",
    slug: "apple-usb",
  },
  {
    id: 3,
    name: "Work Space",
    category: ["websites"],
    image: "images/hudaUniversity/img2.png",
    slug: "work-space",
  },
  {
    id: 4,
    name: "dashboards Bulb",
    category: ["dashboards"],
    image: "images/hudaUniversity/img2.png",
    slug: "dashboards-bulb",
  },
  {
    id: 5,
    name: "Iphone 8",
    category: ["websites", "email templates"],
    image: "images/hudaUniversity/img2.png",
    slug: "iphone-8",
  },
  {
    id: 6,
    name: "Minimal email templates",
    category: ["landing pages", "dashboards"],
    image: "images/hudaUniversity/img2.png",
    slug: "minimal-email templates",
  },
  {
    id: 7,
    name: "dashboards email templates",
    category: ["dashboards"],
    image: "images/hudaUniversity/img2.png",
    slug: "dashboards-email templates",
  },
  {
    id: 8,
    name: "Apple USB",
    category: ["dashboards", "landing pages"],
    image: "images/hudaUniversity/img2.png",
    slug: "apple-usb",
  },
  {
    id: 9,
    name: "Work Space",
    category: ["websites"],
    image: "images/hudaUniversity/img2.png",
    slug: "work-space",
  },
];

function Portfolios2() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();

    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);

    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        console.log(data.category, targetFilter);
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      {/* <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div> */}

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-sm-6 col-md-4 col-xl-3  grid-item" key={item.id}>
            <Portfolio2 portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios2;
