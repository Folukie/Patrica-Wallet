import "./toggle.styles.scss";
import { Spin as Hamburger } from "hamburger-react";

import { useState } from "react";

const Toggle = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mobile-toggle">
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        size={22}
        easing="ease-in"
        color="#fff"
        duration={0.4}
        onToggle={(toggled) => {
          const sidebar = document.querySelector(".sidebar");
          if (toggled) {
            sidebar.style.display = "grid";
            sidebar.style.transform = " translateX(0)";
          } else {
            sidebar.style.transform = " translateX(-100%)";
          }
        }}
      />
    </div>
  );
};

export default Toggle;
