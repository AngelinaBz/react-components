import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders Button with correct props', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Что сделать/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
