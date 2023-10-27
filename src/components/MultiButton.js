import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    //Becayse we want to pass in information to the event handle in this example,
    //with the onclick event listener here we have to add another function and define it instead
    //of just invoking the handleClick function

    //        why?

    // because when you don't provide a function definition
    // the handleClick function is triggered by default when the page loads
    // but when you do each button will now handle a function definitionthat
    // will be invoked when the function is clicked
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;
