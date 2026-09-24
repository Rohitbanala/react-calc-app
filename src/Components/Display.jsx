import { useState } from "react";
import "./Display.css";
function Display({ sum: sum, currNum: currNum }) {
  return (
    <>
      <h2>{currNum !== 0 ? currNum : sum}</h2>
    </>
  );
}

export default Display;

//frontend - javascript, react
//backend - python, java, springboot,oops,lambda expression, apis
//cloud - aws, azure
//data base - mysql
//devops

// encapsulation, inheritance, polymorphism, abstraction

//lifting state up
