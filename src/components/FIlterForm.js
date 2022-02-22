import React from "react";

const FIlterForm = ({ transformedNav, clearAllFields }) => {
  const submitHandler = (e) => {
    e.preventDefault();

    transformedNav.map((field) =>
      field.children.map((item) => {
        console.log(item);
      })
    );
  };

  const clickHandler = () => {
    clearAllFields();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <button type="submit">Done</button>
        <button type="button" onClick={clickHandler}>
          Clear All filters
        </button>
      </form>
    </div>
  );
};

export default FIlterForm;
