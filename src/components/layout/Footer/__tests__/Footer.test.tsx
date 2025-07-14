/**
 * @jest-environment-jsdom
 */
import { render, screen } from '@testing-library/react';
import { Footer } from '../index';

describe('Footer Component', () => {
  it('should render the Apply Digital logo', () => {
    render(<Footer />);
    
    const logo = screen.getByAltText('Apply Digital Logo');
    expect(logo).toBeInTheDocument();
  });

  it('should have a link to the homepage ("/")', () => {
    render(<Footer />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });
});