import { ChangeEvent, MouseEvent, useState } from "react";
import styles from "./Register.module.css";
import { register } from "../../helpers/register";
const Register = (): JSX.Element => {
  const initialState: User = {
    name: "",
    lastname: "",
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
    const result = await register(newUser);
    if (result.ok) {
      setNewUser(initialState);
    }
  };
  return (
    <form className={styles.container}>
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
        <label htmlFor="lastname">Apellido</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          autoComplete="off"
          value={newUser.lastname}
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
  );
};
export { Register };
