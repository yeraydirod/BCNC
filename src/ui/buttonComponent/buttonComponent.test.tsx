import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';

import ButtonAnimatedGradient from './buttonComponent';

test('ButtonAnimatedGradient renders correctly', () => {
  render(<ButtonAnimatedGradient title="Test Button" />);
  
  const button = screen.getByTitle('Test Button');
  expect(button).toBeInTheDocument();
});