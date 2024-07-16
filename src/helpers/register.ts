type Response = {
  ok?: boolean;
  error?: unknown;
};

const register = async (newUser: User): Promise<Response> => {
  try {
    const URL = "";
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
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
