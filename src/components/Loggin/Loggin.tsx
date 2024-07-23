import styles from "./Loggin.module.css";
import { loggin } from "../../helpers/loggin";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, MouseEvent, useState } from "react";
import { getStorage, setStorage } from "../../hooks/useLocalStorage";
const Loggin = (): JSX.Element => {
  const navigate = useNavigate();
  const initialState: Credetials = {
    email: "",
    password: "",
  };
  const [credentials, setCredentials] = useState<Credetials>(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const handleLoggin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const token = await loggin(credentials);
    if (token?.length) {
      setStorage("user_forum_sesion", token);
      console.log(getStorage("user_forum_sesion"));
      navigate("/");
    }
    console.log(token);
  };
  return (
    <div className={styles.container}>
      <form >
        <fieldset className={styles.logginForm}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            autoComplete="on"
            onChange={handleInputChange}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            autoComplete="on"
            onChange={handleInputChange}
          />
          <button type="submit" onClick={handleLoggin}>
            Iniciar sesión
          </button>
        </fieldset>
      </form>
    </div>
  );
};
export { Loggin };
