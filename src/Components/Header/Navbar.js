import React, { useState } from "react";

import styles from "./Navbar.module.css";

export default function Navbar({ backgroundColor, fontColor, brand }) {
  const [isMenuClosed, setMenuClosed] = useState(true);

  return (
    <div
      className={styles.nav_container}
      style={{ backgroundColor: backgroundColor, color: fontColor }}
    >
      <nav>
        <img
          className={styles.image}
          href="https://www.entrepreneurshipnetwork.net"
          alt="logo"
          src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_125,h_100,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp"
        />

        <div className={styles.image_bottom} />
        <div
          className={styles.nav_hamburguer_icon}
          onClick={() => setMenuClosed(!isMenuClosed)}
        >
          ☰
          {/* <div className={styles.nav_hamburguer_iconBox}>
            <div className={styles.nav_hamburguer_iconFirstline}></div>
            <div className={styles.nav_hamburguer_iconMiddleline}></div>
            <div className={styles.nav_hamburguer_iconLastline}></div>
          </div> */}
        </div>
        <div className={styles.nav_links}>
          <a
            href="https://www.entrepreneurshipnetwork.net"
            className={styles.overlay_menu_item}
            style={{ color: "red" }}
          >
            Home
          </a>
          <span className={styles.divider}></span>
          <a
            href="https://www.entrepreneurshipnetwork.net/courses"
            className={styles.overlay_menu_item}
            style={{ color: fontColor }}
          >
            Online Courses
          </a>
          <span className={styles.divider}></span>
          <a
            href="https://www.entrepreneurshipnetwork.net/hiring"
            className={styles.overlay_menu_item}
            style={{ color: fontColor }}
          >
            We're Hiring
          </a>
          <span className={styles.divider}></span>
          <a
            href="/"
            className={styles.overlay_menu_item}
            style={{ color: fontColor }}
          >
            More
          </a>
        </div>
      </nav>
      <div
        className={
          isMenuClosed
            ? styles.overlay_container_hidden
            : styles.overlay_container_show
        }
      >
        <div style={{ backgroundColor: backgroundColor }}>
          <div
            className={styles.overlay_buttonClose}
            onClick={() => setMenuClosed(false)}
          >
            <span>&times;</span>
          </div>
          <div className={styles.overlay_menu_wrapper}>
            <div className={styles.overlay_menu}>
              <a
                href="https://www.entrepreneurshipnetwork.net"
                onClick={() => setMenuClosed(false)}
                className={styles.overlay_menu_item}
                style={{ color: "red" }}
              >
                Home
              </a>
              <a
                href="https://www.entrepreneurshipnetwork.net/courses"
                onClick={() => setMenuClosed(false)}
                className={styles.overlay_menu_item}
                style={{ color: fontColor }}
              >
                Online Courses
              </a>
              <a
                href="https://www.entrepreneurshipnetwork.net/hiring"
                onClick={() => setMenuClosed(false)}
                className={styles.overlay_menu_item}
                style={{ color: fontColor }}
              >
                We're Hiring
              </a>
              <a
                href="/"
                onClick={() => setMenuClosed(false)}
                className={styles.overlay_menu_item}
                style={{ color: fontColor }}
              >
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  backgroundColor: "white",
  fontColor: "black",
};
