import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
const NavBar = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <p>LogoWeb</p>

      <input type="text" id="searchBar" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/loggin">Loggin</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};
export { NavBar };
