import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Sample from './Sample';

describe('Sample', () => {
  it('renders a sample text', () => {
    render(<Sample />);

    const text = screen.getByText('This Is Sample');

    expect(text).toBeInTheDocument();
  });
});
