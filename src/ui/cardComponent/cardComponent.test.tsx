import { fireEvent, render, screen } from '@testing-library/react';

import CardTilt from './cardComponent';

test('CardTilt renders correctly', () => {
  const content = 'Test Content';
  const id = 1;

  render(<CardTilt content={content} id={id} />);

  const card = screen.getByText(content);
  expect(card).toBeInTheDocument();
});



test('CardTilt handles click event', () => {
  const content = 'Test Content';
  const id = 1;
  const onClickMock = jest.fn();

  render(<CardTilt content={content} id={id} onClick={onClickMock} />);

  const card = screen.getByText(content);

  fireEvent.click(card);

  expect(onClickMock).toHaveBeenCalledWith(id);
});
