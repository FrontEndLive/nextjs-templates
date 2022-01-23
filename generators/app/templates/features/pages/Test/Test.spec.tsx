import React from 'react';

import { render } from '@testing-library/react';

import Test from '@/features/pages/Test/Test';

describe('Test', () => {
  it('renders without crashing', () => {
    const { container } = render(<Test />);
    expect(container).toBeTruthy();
  });
});
