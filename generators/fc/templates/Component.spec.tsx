import { render } from '@testing-library/react';

import Component from './Component';

describe('Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Component />);
    expect(container).toBeTruthy();
  });
});
