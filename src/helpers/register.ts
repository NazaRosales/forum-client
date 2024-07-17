type Response = {
  ok?: boolean;
  error?: unknown;
};
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const register = async (newUser: User): Promise<Response> => {
  try {
    const response = await fetch(`${BASE_URL}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
    return { ok: false, error };
  }
};

export { register };
