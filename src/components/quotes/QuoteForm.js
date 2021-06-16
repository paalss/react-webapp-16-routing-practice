import { Fragment, useRef, useState } from "react";

import classes from "./QuoteForm.module.css";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import { Prompt } from "react-router";

const QuoteForm = ({ onAddQuote, isLoading }) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  // Fjern grunnen til å prompte brukeren når det navigeres
  // til annen side. Det skal skje før submitFormHandler funksjon
  // da den rekker å navigere før state endres
  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <Fragment>
      {/* Prompt brukeren om de har berørt form og prøver å navigere seg bort */}
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All entered data will be lost"
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
