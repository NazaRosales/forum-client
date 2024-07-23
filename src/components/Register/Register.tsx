import { ChangeEvent, MouseEvent, useState } from "react";
import styles from "./Register.module.css";
import { registerUser } from "../../helpers/registerUser";
import { useNavigate } from "react-router-dom";
const Register = (): JSX.Element => {
  const navigate = useNavigate();
  const initialState: User = {
    name: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  };
  const [newUser, setNewUser] = useState<User>(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleRegister = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault();
    const result = await registerUser(newUser);
    if (result.ok) {
      setNewUser(initialState);
      navigate("/loggin");
    }
  };
  return (
    <div className={styles.container}>
      <form>
        <fieldset className={styles.registerForm}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="off"
            value={newUser.lastName}
            onChange={handleInputChange}
          />
          <label htmlFor="userName">Nombre de usuario</label>
          <input
            type="text"
            id="userName"
            name="userName"
            autoComplete="off"
            value={newUser.userName}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="on"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            value={newUser.password}
            onChange={handleInputChange}
          />
          <button type="submit" onClick={handleRegister}>
            Registrarse
          </button>
        </fieldset>
      </form>
    </div>
  );
};
export { Register };
