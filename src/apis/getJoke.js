const getJoke = async () => {
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Any");
    if (!res.ok) {
      throw new Error(`HTTP error, status ${res.status}`);
    }
    const jokeData = await res.json();
    return jokeData;
  } catch (err) {
    console.error(err);
  }
};

export default getJoke;
