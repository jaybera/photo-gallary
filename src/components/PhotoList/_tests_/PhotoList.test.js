import { render } from '@testing-library/react';
import PhotoList from '../index.js';

test('renders Photos', () => {
  const { container } = render(<PhotoList albumId={1}/>);
  expect(container).not.toBeNull();
});