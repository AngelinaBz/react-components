import { Component } from 'react';
import './Counter.css';

type CounterProps = {
  style: 'primary' | 'secondary';
  size: 8 | 12 | 16 | 20 | 24;
  stroke: boolean;
  quantity: number | string;
};

class Counter extends Component<CounterProps> {
  render() {
    const { style, size, quantity } = this.props;
    let minHeight, paddingHorizontal, strokeWidth;

    switch (size) {
      case 8:
        minHeight = 8;
        paddingHorizontal = 0;
        strokeWidth = 1;
        break;
      case 12:
        minHeight = 12;
        paddingHorizontal = 0;
        strokeWidth = 2;
        break;
      case 16:
        minHeight = 16;
        paddingHorizontal = 4;
        strokeWidth = 2;
        break;
      case 20:
        minHeight = 20;
        paddingHorizontal = 4;
        strokeWidth = 2;
        break;
      case 24:
        minHeight = 24;
        paddingHorizontal = 6;
        strokeWidth = 3;
        break;
      default:
    }
    const counterClasses = `counter ${style} size-${size}`;
    return (
      <div
        className={counterClasses}
        style={{
          padding: `0 ${paddingHorizontal}px`,
          borderWidth: strokeWidth,
          height: minHeight,
          minWidth: minHeight,
        }}
      >
        {size < 16 ? null : quantity}
      </div>
    );
  }
}

export default Counter;
