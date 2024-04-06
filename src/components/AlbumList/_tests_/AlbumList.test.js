import { render } from '@testing-library/react';
import AlbumList from '../index.js';

test('renders Album', async () => {
  const { container } = render(<AlbumList userId={1}/>);
  expect(container).not.toBeNull();
});