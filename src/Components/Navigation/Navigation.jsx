import { Link } from "react-router-dom";
import style from "./Navigation.module.css";

const navigationLinks = [
  { title: "Home", link: "/" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "User", link: "/user" },
];

const Navigation = () => {
  const nav = navigationLinks.map(({ link, title }) => {
    return (
      <li className={style.navListItem} key={title}>
        <Link to={link}>{title}</Link>
      </li>
    );
  });

  return (
    <nav className={style.navigation}>
      <ul className={style.navList}>{nav}</ul>
    </nav>
  );
};
export default Navigation;
