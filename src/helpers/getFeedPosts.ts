const getFeedPosts = async (): Promise<Array<Post> | null> => {
  try {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(`${BASE_URL}posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return null;
    }
    const result = await response.json();
    const data: Array<Post> = result.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { getFeedPosts };
