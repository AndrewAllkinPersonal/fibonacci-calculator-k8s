import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
      <h2>About the Fibonacci Sequence</h2>
      <p>
        The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
        The sequence goes like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so forth.
      </p>
      <h3>How it Works</h3>
      <p>
        To generate the Fibonacci sequence, you start with the first two numbers, 0 and 1. Then, to get the next number in the sequence, you add the previous two numbers together.
        So, 0 + 1 = 1, then 1 + 1 = 2, 1 + 2 = 3, and so on.
      </p>
      <p>
        This process can continue indefinitely, producing an infinite series of numbers that exhibit fascinating mathematical properties and appear in various natural phenomena.
      </p>
      <p>
        If you're interested in exploring more about the Fibonacci sequence or its applications, you can find additional resources <a href="https://www.mathsisfun.com/numbers/fibonacci-sequence.html" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <div>
        <Link to="/">Return to the Fibonnaci Calculator</Link>
      </div>
    </div>
  );
};

export default OtherPage;