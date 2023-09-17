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
    name: "RSSA, Radiological Society of Saudi Arabia",
    category: ["websites"],
    image: "images/rssa/home.jpg",
    slug: "rssa",
  },
  {
    id: 2,
    name: "Crypto Currencies Dashboard ",
    category: ["dashboards"],
    image: "images/trPay/home.jpg",
    slug: "trPayUser",
  },
  {
    id: 3,
    name: "LoBox",
    category: ["landing pages"],
    image: "images/lobox/home.jpg",
    slug: "lobox",
  },
  {
    id: 4,
    name: "Dhan App",
    category: ["landing pages"],
    image: "images/vinay/home.jpg",
    slug: "dhanApp",
  },
  {
    id: 5,
    name: "Al-Huda University",
    category: ["websites"],
    image: "images/hudaUniversity/home.jpg",
    slug: "hudaUniversity",
  },
  {
    id: 6,
    name: "Ajyal Landing Page and Dashboard",
    category: ["landing pages", "dashboards"],
    image: "images/ajyal/home.jpg",
    slug: "ajyal",
  },
  {
    id: 7,
    name: "Yalla App",
    category: ["landing pages"],
    image: "images/menu/home.jpg",
    slug: "yalla",
  },
  {
    id: 8,
    name: "AL Maqal Landing Page",
    category: ["landing pages"],
    image: "images/moaql/home.jpg",
    slug: "al-maqal",
  },
  {
    id: 9,
    name: "Krogarna Dashboard",
    category: ["dashboards"],
    image: "images/educationDash/home.jpg",
    slug: "educationDash",
  },
  {
    id: 10,
    name: "Highnox Dashboard",
    category: ["dashboards"],
    image: "images/dashboardLearn/home.jpg",
    slug: "learnDash",
  },
  {
    id: 11,
    name: "Al-sharq Feloowship Program",
    category: ["websites"],
    image: "images/education/home.jpg",
    slug: "al-sharq",
  },
  {
    id: 12,
    name: "Dash",
    category: ["websites"],
    image: "images/dash/home.jpg",
    slug: "dash",
  },
  {
    id: 13,
    name: "Kaitoss",
    category: ["landing pages"],
    image: "images/kaitos/home.jpg",
    slug: "kaitoss",
  },
  {
    id: 14,
    name: "Pringo",
    category: ["websites"],
    image: "images/website/home.jpg",
    slug: "pringo",
  },
  {
    id: 15,
    name: "TR-Pays Admin",
    category: ["websites"],
    image: "images/trPayAdmin/home.jpg",
    slug: "trPayAdmin",
  },
  {
    id: 16,
    name: "Work Space",
    category: ["websites"],
    image: "images/evaro/home.jpg",
    slug: "work-space",
  },
  {
    id: 17,
    name: "Work Space",
    category: ["dashboards"],
    image: "images/product/home.jpg",
    slug: "work-space",
  },
  {
    id: 18,
    name: "Work Space",
    category: ["landing pages"],
    image: "images/marthon/home.jpg",
    slug: "work-space",
  },
  {
    id: 19,
    name: "Work Space",
    category: ["dashboards"],
    image: "images/lawyer/home.jpg",
    slug: "work-space",
  },
  {
    id: 20,
    name: "Work Space",
    category: ["websites"],
    image: "images/ecommercial/home.jpg",
    slug: "work-space",
  },
  {
    id: 21,
    name: "Work Space",
    category: ["websites"],
    image: "images/movie/home.jpg",
    slug: "work-space",
  },
  {
    id: 22,
    name: "Work Space",
    category: ["websites"],
    image: "images/todo/home.jpg",
    slug: "work-space",
  },
  {
    id: 23,
    name: "Work Space",
    category: ["websites"],
    image: "images/menu1/home.jpg",
    slug: "work-space",
  },
];

function Portfolios2() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(8);
  const [dataIncrement] = useState(4);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 8));
  }, [getAllItems]);
  // console.log("🚀 ~ file: Portfolios2.jsx:174 ~ Portfolios2 ~ getAllItems:", getAllItems.filter((item) => item.id <= 8))

  const handleChange = (e) => {
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
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    // let dataFilter =
    //   (targetFilter != targetFilter) === filters[0].name.toLowerCase()
    //     ? allData.filter((data) => {
    //         return (
    //           data.category.includes(targetFilter) &&
    //           data.id <= allData?.length - 1
    //         );
    //       })
    //     : getAllItems.filter((data) => data.id <= dataVisibleCount);

    if (tempData?.length < 8) {
      setNoMorePost(true);
    } else {
      setNoMorePost(false);
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
    }
    if (activeFilter === filters[0].name.toLowerCase()) {
      setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
    } else {
      let items = getAllItems.filter((data) => {
        return data.category.includes(activeFilter) && data.id <= tempCount;
      });
      setVisibleItems(items);
    }
  };

  return (
    <>
      <ul className="portfolio-filter list-inline fadeIn delay_ms_3">
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

      <div className="row portfolio-wrapper fadeIn delay_ms_5">
        {visibleItems.map((item) => (
          <div className="col-sm-6 col-md-4 col-xl-3  grid-item" key={item.id}>
            <Portfolio2 portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4 fadeIn delay_ms_7">
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
