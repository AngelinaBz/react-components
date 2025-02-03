import { render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders with primary style and size 16', () => {
    render(
      <Counter
        style="primary"
        size={16}
        stroke={false}
        quantity={10}
        pulse={false}
      />
    );

    const counterElement = screen.getByText('10');
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveClass('counter primary size-16');
    expect(counterElement).toHaveStyle('min-height: 16px');
  });

  test('does not render quantity for sizes less than 16', () => {
    render(
      <Counter
        style="secondary"
        size={12}
        stroke={true}
        quantity={5}
        pulse={true}
      />
    );

    const counterElement = screen.queryByText('5');
    expect(counterElement).not.toBeInTheDocument();
  });

  test('does not render live indicator for size 16', () => {
    render(
      <Counter
        style="secondary"
        size={16}
        stroke={false}
        quantity={3}
        pulse={true}
      />
    );

    const liveIndicator = screen.queryByText(/live-indicator/i);
    expect(liveIndicator).not.toBeInTheDocument();
  });

  test('applies correct styles based on size prop', () => {
    const { rerender } = render(
      <Counter
        style="primary"
        size={24}
        stroke={true}
        quantity={1}
        pulse={false}
      />
    );

    const counterElement = screen.getByText('1');
    expect(counterElement).toHaveStyle('padding: 0 6px');
    expect(counterElement).toHaveStyle('border-width: 3px');
    expect(counterElement).toHaveStyle('min-height: 24px');

    rerender(
      <Counter
        style="secondary"
        size={8}
        stroke={false}
        quantity={2}
        pulse={true}
      />
    );
  });
});
