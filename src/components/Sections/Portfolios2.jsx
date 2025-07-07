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
  {
    id: 1,
    name: "LoBox",
    category: ["landing pages"],
    image: "images/lobox/home.jpg",
    slug: "lobox",
    demoLink:"https://monamohammed97.github.io/Lob_Box/index.html"
  },
  {
    id: 2,
    name: "RSSA, Radiological Society of Saudi Arabia",
    category: ["websites"],
    image: "images/rssa/home.jpg",
    slug: "rssa",
    demoLink:"https://rssa-monamohammed23.vercel.app/"
  },
  {
    id: 3,
    name: "Crypto Currencies Dashboard ",
    category: ["dashboards"],
    image: "images/trPay/home.jpg",
    slug: "trPayUser",
    demoLink:"https://tr-payuser-monamohammed23.vercel.app/"
  },
  {
    id: 4,
    name: "Marathon",
    category: ["landing pages"],
    image: "images/marthon/home.jpg",
    slug: "marthon",
    demoLink:"https://marathon-khaki.vercel.app/"
  },
  {
    id: 5,
    name: "Dhan App",
    category: ["landing pages"],
    image: "images/vinay/home.jpg",
    slug: "dhanApp",
    demoLink:"https://monamohammed97.github.io/Vinay/"
  },
  {
    id: 6,
    name: "Al-Huda University",
    category: ["websites"],
    image: "images/hudaUniversity/home.jpg",
    slug: "hudaUniversity",
    demoLink: "https://huda-university-monamohammed23.vercel.app/"
  },
  {
    id: 7,
    name: "Ajyal Landing Page and Dashboard",
    category: ["landing pages", "dashboards"],
    image: "images/ajyal/home.jpg",
    slug: "ajyal",
    demoLink: "https://ajyal.ps/"
  },
  {
    id: 8,
    name: "Email",
    category: ["email templates"],
    image: "images/email1/home.jpg",
    slug: "email1",
    demoLink: "https://email-template-monamohammed23.vercel.app/"
  },
  {
    id: 9,
    name: "AL Maqal Landing Page",
    category: ["landing pages"],
    image: "images/moaql/home.jpg",
    slug: "al-maqal",
    demoLink: "https://monamohammed97.github.io/homepage/?fbclid=IwAR3O4wzzNeiIqw89KTZHzpMyLveHjGUneS0yl-djzmoUUYWiJTvyMpx-XFk"
  },
  {
    id: 10,
    name: "Krogarna Dashboard",
    category: ["dashboards"],
    image: "images/educationDash/home.jpg",
    slug: "educationDash",
    demoLink: "https://login-eight-taupe.vercel.app/"
  },
  {
    id: 11,
    name: "Highnox Dashboard",
    category: ["dashboards"],
    image: "images/dashboardLearn/home.jpg",
    slug: "learnDash",
    demoLink: "https://dashboard-seven-lilac.vercel.app/"
  },
  {
    id: 12,
    name: "Al-sharq Feloowship Program",
    category: ["websites"],
    image: "images/education/home.jpg",
    slug: "al-sharq",
    demoLink: "https://al-sharq-monamohammed23.vercel.app/"
  },
  {
    id: 13,
    name: "Dash",
    category: ["websites"],
    image: "images/dash/home.jpg",
    slug: "dash",
    demoLink: "https://dash-saudi.vercel.app/"
  },
  {
    id: 14,
    name: "Kaitoss",
    category: ["landing pages"],
    image: "images/kaitos/home.jpg",
    slug: "kaitoss",
    demoLink: "https://monamohammed97.github.io/MonaShabanKaitoss/"
  },
  {
    id: 15,
    name: "Yalla App",
    category: ["landing pages"],
    image: "images/menu/home.jpg",
    slug: "yalla",
    demoLink: "https://monamohammed97.github.io/landingPage/?fbclid=IwAR0IQAPD5ES-SHpe-G7g2rQo-7zt84_OzdBlFPhnNJ-O0RKZmhd69IWr4k8"
  },
  {
    id: 16,
    name: "TR-Pays Admin",
    category: ["websites"],
    image: "images/trPayAdmin/home.jpg",
    slug: "trPayAdmin",
    demoLink: "https://dashborad-tr-pay-monamohammed23.vercel.app/"
  },
  {
    id: 17,
    name: "Evaro",
    category: ["websites"],
    image: "images/evaro/home.jpg",
    slug: "evaro",
    demoLink: "https://evaro.vercel.app/"
  },
  {
    id: 18,
    name: "Saudi food & drog authority Dashboard",
    category: ["dashboards"],
    image: "images/product/home.jpg",
    slug: "product",
    demoLink: "https://dashboard-m-monamohammed23.vercel.app/"
  },
  {
    id: 19,
    name: "Lawyers Dashborad",
    category: ["dashboards"],
    image: "images/lawyer/home.jpg",
    slug: "lawyer",
    demoLink: "https://dashboard-lawyer-monamohammed23.vercel.app/"
  },
  {
    id: 20,
    name: "ProShop E-commercial",
    category: ["websites"],
    image: "images/ecommercial/home.jpg",
    slug: "ecommercial",
    demoLink: "https://e-commercial-monamohammed23.vercel.app/"
  },
  {
    id: 21,
    name: "Movies App",
    category: ["websites"],
    image: "images/movie/home.jpg",
    slug: "movie",
    demoLink: "https://movies-app-main-monamohammed23.vercel.app/"
  },
  {
    id: 22,
    name: "To Do App",
    category: ["websites"],
    image: "images/todo/home.jpg",
    slug: "todo",
    demoLink: "https://to-do-list-git-main-monamohammed23.vercel.app/"
  },
  {
    id: 23,
    name: "Menu App",
    category: ["websites"],
    image: "images/menu1/home.jpg",
    slug: "menu",
    demoLink: "https://monamohammed97.github.io/MenuProject/?fbclid=IwAR2bMwc5O9ZuZKQ42LkJw7cawoh6_rYDcsj86yBIBSHEwGlsUcVpFukYtd0"
  },
  {
    id: 24,
    name: "Pringo",
    category: ["websites"],
    image: "images/website/home.jpg",
    slug: "pringo",
    demoLink: "https://website-monamohammed23.vercel.app/"
  },
  {
    id: 25,
    name: "Email",
    category: ["email templates"],
    image: "images/email2/home.jpg",
    slug: "email2",
    demoLink: "https://mona-email.vercel.app/"
  },
];

function Portfolios2() {
  const [activeFilter, setActiveFilter] = useState(filters[0].name.toLowerCase());
  const [filteredItems, setFilteredItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [dataVisibleCount, setDataVisibleCount] = useState(8);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    filterData(filters[0].name.toLowerCase());
  }, []);

  const filterData = (filter) => {
    let tempData =
      filter === filters[0].name.toLowerCase()
        ? allData
        : allData.filter((data) => data.category.includes(filter));
    
    setFilteredItems(tempData);
    setVisibleItems(tempData.slice(0, 8));
    setNoMorePost(tempData.length <= 8);
    setDataVisibleCount(8);
  };

  const handleChange = (e) => {
    e.preventDefault();
    let targetFilter = e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    filterData(targetFilter);
  };

  const handleLoadMore = (e) => {
    e.preventDefault();
    let newCount = dataVisibleCount + 4;
    setDataVisibleCount(newCount);
    setVisibleItems(filteredItems.slice(0, newCount));
    setNoMorePost(newCount >= filteredItems.length);
  };

  return (
    <>
      <ul className="portfolio-filter list-inline fadeIn delay_ms_3">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter ? "list-inline-item mb-2 current" : "list-inline-item mb-2"
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
          <a href="#" className="btn btn-default" onClick={handleLoadMore}>
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios2;