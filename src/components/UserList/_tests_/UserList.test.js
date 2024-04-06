import { render } from '@testing-library/react';
import UserList from '../index.js';

test('renders users', () => {
  const { container } = render(<UserList />);
  expect(container).not.toBeNull();
});