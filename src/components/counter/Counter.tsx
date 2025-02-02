import { Component } from 'react';
import './Counter.css';

type CounterProps = {
  style: 'primary' | 'secondary';
  size: 8 | 12 | 16 | 20 | 24;
  stroke: boolean;
  quantity: number | string;
  pulse: boolean;
};

class Counter extends Component<CounterProps> {
  render() {
    return <div className="counter"></div>;
  }
}

export default Counter;
