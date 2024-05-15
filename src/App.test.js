import { render, screen } from '@testing-library/react';
import Selection from './Selection';

test('renders learn react link', () => {
  render(<Selection />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
