import { Component } from 'react';
import './Button.css';
import Counter from '../counter/Counter';

type ButtonProps = {
  label: string;
  style: 'primary' | 'secondary';
  size: 28 | 36 | 56;
  state: 'enabled' | 'pressed' | 'loading' | 'disabled';
  counter: boolean;
  focused: boolean;
};

class Button extends Component<ButtonProps> {
  render() {
    const { label, style, size, state, counter, focused } = this.props;

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

    const buttonClasses = `button ${style} ${state} ${focused ? 'focused' : ''}`;

    return (
      <button
        className={buttonClasses}
        style={{
          padding: `${paddingVertical}px ${paddingHorizontal}px`,
        }}
      >
        <div
          className="contentGroup"
          style={{
            gap: `${gap}px`,
          }}
        >
          {state === 'loading' ? (
            <div
              className="loader"
              style={{ width: loaderSize, height: loaderSize }}
            >
              {/**/}
            </div>
          ) : (
            <>
              <span className="label">{label}</span>
              {counter && (
                <Counter
                  style={style}
                  size={8}
                  quantity={10}
                  pulse={true}
                  stroke={true}
                />
              )}
            </>
          )}
        </div>
      </button>
    );
  }
}

export default Button;
