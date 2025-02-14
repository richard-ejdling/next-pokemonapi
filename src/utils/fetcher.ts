export const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Fetcher error:", error);
    throw error;
  }
};
