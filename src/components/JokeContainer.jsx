import Loading from "../components/Loading";
import Joke from "../components/Joke";
import { useEffect, useState } from "react";
import getJoke from "../apis/getJoke";

import "./JokeContainer.css";

const JokeContainer = () => {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newJoke, setNewJoke] = useState(0);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const jokeData = await getJoke();
        setJoke(jokeData);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchJoke();
  }, [newJoke]);

  const clickHandler = () => {
    setNewJoke((prevJoke) => prevJoke + 1);
  };

  return (
    <div className="joke-container">
      {loading && <Loading />}
      {joke && <Joke joke={joke} />}
      <div>
        <button className="get-a-joke-btn" onClick={clickHandler}>
          Get a joke
        </button>
      </div>
      {error && <div className="error">Joke not found</div>}
    </div>
  );
};

export default JokeContainer;
