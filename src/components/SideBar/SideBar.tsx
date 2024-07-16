import styles from "./SideBar.module.css";
const SideBar = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2>Categorias</h2>
      <ul>
        <li>Desarrollo</li>
        <li>UX/UI</li>
        <li>Inteligencia Artificial</li>
      </ul>
    </div>
  );
};
export { SideBar };
