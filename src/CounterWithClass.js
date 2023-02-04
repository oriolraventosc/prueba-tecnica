import React from "react";

export class CounterWithClass extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <>
        <p>{this.state.counter}</p>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>
      </>
    );
  }
}
