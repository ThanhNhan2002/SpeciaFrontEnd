import { render, screen } from '@testing-library/react';
import App from './App';

test('renders digitalworkers link', () => {
  render(<App />);
  const linkElement = screen.getByText(/digitalworkers/i);
  expect(linkElement).toBeInTheDocument();
});
