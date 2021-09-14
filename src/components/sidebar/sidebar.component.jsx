import { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";

import "./sidebar.styles.scss";

const Sidebar = () => {
  const [links, setLinks] = useState([
    {
      id: 1,
      title: "Dashboard",
      icon: "./images/dashboard.svg",
      status: "inactive",
    },
    {
      id: 2,
      title: "activity",
      icon: "./images/activity.svg",
      status: "inactive",
    },
    {
      id: 3,
      title: "wallet",
      icon: "./images/wallet.svg",
      status: "active",
    },
    {
      id: 4,
      title: "products",
      icon: "./images/products.svg",
      status: "inactive",
    },
    {
      id: 5,
      title: "referrals",
      icon: "./images/referrals.svg",
      status: "inactive",
    },
  ]);
  return (
    <BrowserRouter>
      <sidebar>
        <div className="logo">
          <img src="./images/patricia-logo.svg" alt="patricia logo" />
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.id} className={link.status}>
              <Link to="/">
                <img src={link.icon} alt={link.title} />
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="help">
          <Link to="/">
            <img src="./images/help.svg" alt="help" />
            Help Center
          </Link>
        </div>
      </sidebar>
    </BrowserRouter>
  );
};

export default Sidebar;
