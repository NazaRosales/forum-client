import styles from "./Loggin.module.css";
const Loggin = (): JSX.Element => {
  return (
    <form className={styles.container}>
      <fieldset className={styles.logginForm}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" autoComplete="on" />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="on"
        />
        <button type="submit">Iniciar sesión</button>
      </fieldset>
    </form>
  );
};
export { Loggin };
