import { render } from '@testing-library/react';
import AlbumList from '../index.js';

test('renders photos', async () => {
  render(<AlbumList albumId={1} />);
  const photoElements = await screen.findAllByRole('img');
  expect(photoElements.length).not.tobeNull(); 
});