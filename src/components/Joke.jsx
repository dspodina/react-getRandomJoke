import PropTypes from "prop-types";
import "./Joke.css";

const Joke = ({ joke }) => {
  return (
    <div className="joke-container">
      <h2>{joke.category}</h2>
      <div className="underline"></div>
      {joke.type === "single" ? (
        <div className="joke">{joke.joke}</div>
      ) : (
        <div>
          <div className="setup">{joke.setup}</div>
          <div className="delivery">{joke.delivery}</div>
        </div>
      )}
      <div className="safe-block">
        <ul className={joke.safe ? "safe" : "unsafe"}>
          <span className={joke.safe ? "green-dot" : "red-dot"}>&#x2022;</span>
          {joke.safe ? "Light-hearted humor" : "Warning: explicit content"}
        </ul>
      </div>

      <div className="flags">
        {Object.entries(joke.flags).map(([flag, value]) => (
          <li key={flag} className={value ? "true" : "false"}>
            {flag}
          </li>
        ))}
      </div>
    </div>
  );
};

Joke.propTypes = {
  joke: PropTypes.shape({
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    joke: PropTypes.string,
    setup: PropTypes.string,
    delivery: PropTypes.string,
    safe: PropTypes.string,
    flags: PropTypes.objectOf(PropTypes.bool).isRequired,
  }).isRequired,
};

export default Joke;
