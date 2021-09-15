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
        color="#9DA8B6"
        duration={0.4}
        onToggle={(toggled) => {
            const sidebar = document.querySelector("sidebar");
          if (toggled) {
           
            sidebar.style.display = "grid";
          } else {
            sidebar.style.display = "none";
          }
        }}
      />
    </div>
  );
};

export default Toggle;
