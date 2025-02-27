import { Component } from 'react';
import './Button.css';
import Counter from '../counter/Counter';
import { styles } from '../../utils/styles';

type ButtonProps = {
  label: string;
  style: 'primary' | 'secondary';
  size: 28 | 36 | 56;
  state: 'enabled' | 'disabled';
};

type ButtonState = {
  isHovered: boolean;
  isPressed: boolean;
  isLoading: boolean;
  counterValue: number;
};

class Button extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      isHovered: false,
      isPressed: false,
      isLoading: false,
      counterValue: 0,
    };
  }
  handleMouseEnter = () => {
    if (!this.state.isPressed && !this.state.isLoading) {
      this.setState({ isHovered: true });
    }
  };

  handleMouseLeave = () => {
    if (!this.state.isPressed && !this.state.isLoading) {
      this.setState({ isHovered: false });
    }
  };

  handleMouseDown = () => {
    this.setState({ isHovered: false, isPressed: true });
  };

  handleMouseUp = () => {
    this.setState({ isPressed: false }, this.startLoading);
  };

  startLoading = () => {
    if (!this.state.isLoading) {
      this.setState({ isLoading: true }, this.incrementCounter);
      setTimeout(() => this.stopLoading(), 2000);
    }
  };

  incrementCounter = () => {
    this.setState((prevState) => ({
      counterValue: prevState.counterValue + 1,
    }));
  };

  stopLoading = () => {
    this.setState({ isLoading: false });
  };
  render() {
    const { label, style, state, size } = this.props;
    const { isHovered, isPressed, isLoading, counterValue } = this.state;

    let paddingHorizontal, paddingVertical, loaderSize, gap;

    switch (size) {
      case 28:
        paddingHorizontal = 10;
        paddingVertical = 6;
        loaderSize = 16;
        gap = 4;
        break;
      case 36:
        paddingHorizontal = 8;
        paddingVertical = 12;
        loaderSize = 20;
        gap = 6;
        break;
      case 56:
        paddingHorizontal = 16;
        paddingVertical = 16;
        loaderSize = 24;
        gap = 8;
        break;
      default:
    }

    const buttonClasses = `button ${style} ${isHovered ? 'hovered' : ''} ${isPressed ? 'pressed' : ''} ${isLoading ? 'loading' : ''} ${state === 'disabled' ? 'disabled' : ''}`;
    return (
      <button
        className={buttonClasses}
        style={{
          padding: `${paddingVertical}px ${paddingHorizontal}px`,
          transform: isHovered
            ? 'scale(1.05)'
            : isPressed
              ? 'scale(0.95)'
              : 'scale(1)',
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        <div
          className="loader"
          style={{
            width: loaderSize,
            height: loaderSize,
            visibility: isLoading ? 'visible' : 'hidden',
          }}
        >
          <img src={styles[style].spinnerURL} alt="Loading" />
        </div>
        <div
          className="contentGroup"
          style={{
            gap: `${gap}px`,
            visibility: isLoading ? 'hidden' : 'visible',
            transform: isHovered
              ? 'scale(1.05)'
              : isPressed
                ? 'scale(0.95)'
                : 'scale(1)',
          }}
        >
          <span className="label">{label}</span>
          {counterValue > 0 && (
            <Counter
              style={style}
              size={16}
              quantity={counterValue > 99 ? '99+' : counterValue}
              pulse={true}
              stroke={true}
            />
          )}
        </div>
        <div
          className="overlay"
          style={{
            backgroundColor: styles[style].color,
          }}
        ></div>
        {isLoading && (
          <div
            className="shimmer"
            style={{ background: styles[style].shimmer }}
          ></div>
        )}
      </button>
    );
  }
}

export default Button;
