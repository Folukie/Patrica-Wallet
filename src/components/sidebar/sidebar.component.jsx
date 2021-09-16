import { Link, useLocation } from "react-router-dom";
import links from "../../data/links.json";
import "./sidebar.styles.scss";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="./images/patricia-logo.svg" alt="patricia logo" />
      </div>
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={location.pathname === link.path ? "active" : ""}
          >
            <Link to={link.path}>
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
    </aside>
  );
};

export default Sidebar;
