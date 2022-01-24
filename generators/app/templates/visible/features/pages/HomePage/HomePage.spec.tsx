import { render } from '@testing-library/react';

import HomePage from 'visible/features/pages/HomePage/HomePage';

describe('HomePage', () => {
  it('renders without crashing', () => {
    const { container } = render(<HomePage />);
    expect(container).toBeTruthy();
  });
});
