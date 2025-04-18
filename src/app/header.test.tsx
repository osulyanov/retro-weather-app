import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
  it('renders ASCII art header', () => {
    render(<Header />);
    const element = screen.getByText((content) => content.includes('██╗'));
    expect(element).toHaveClass('ascii-header');
    expect(element.tagName.toLowerCase()).toBe('pre');
  });
});
