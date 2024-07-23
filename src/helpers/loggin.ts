type Result = {
  token?: string;
};
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const loggin = async (credentials: Credetials): Promise<string | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}auth/loggin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (response.ok) {
      const result: Result = await response.json();
      return result.token;
    }
  } catch (error) {
    console.log(`Error logging: ${error}`);
  }
};
export { loggin };
