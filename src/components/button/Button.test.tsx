import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  const defaultProps = {
    label: 'My Button',
    style: 'primary' as const, // использование as const для конкретного типа
    size: 36 as const,
    state: 'enabled' as const, // также использование as const
  };

  it('renders the button with the correct label and style', () => {
    render(<Button {...defaultProps} />);

    const buttonElement = screen.getByRole('button', { name: /my button/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('primary');
  });

  it('applies hover effect on mouse enter and leaves it on mouse leave', () => {
    render(<Button {...defaultProps} />);

    const buttonElement = screen.getByRole('button', { name: /my button/i });

    fireEvent.mouseEnter(buttonElement);
    expect(buttonElement).toHaveClass('hovered');

    fireEvent.mouseLeave(buttonElement);
    expect(buttonElement).not.toHaveClass('hovered');
  });

  it('handles the pressed state correctly', () => {
    render(<Button {...defaultProps} />);

    const buttonElement = screen.getByRole('button', { name: /my button/i });

    fireEvent.mouseDown(buttonElement);
    expect(buttonElement).toHaveClass('pressed');

    fireEvent.mouseUp(buttonElement);
    expect(buttonElement).not.toHaveClass('pressed');
  });
});
