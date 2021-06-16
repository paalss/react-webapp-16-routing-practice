import { Link } from "react-router-dom";
import classes from "./QuoteItem.module.css";

const QuoteItem = ({ text, author, id }) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link to={`/allQuotes/${id}`} className="btn">
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
