import { render, screen } from '@testing-library/react';
import App from './views/movieDetail/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});