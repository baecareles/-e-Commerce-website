import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders welcome message', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome to the E-commerce App/i);
  expect(linkElement).toBeInTheDocument();
});
