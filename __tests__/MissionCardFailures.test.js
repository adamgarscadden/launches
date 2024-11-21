import { render, screen } from '@testing-library/react';
import MissionCardFailures from '../components/MissionCardFailures';

describe('MissionCardFailures', () => {
  it('the component renders when success is true', () => {
    render(<MissionCardFailures failures="Some bad things" />);
    const component = screen.getByTestId('mission-card-failures');
    expect(component).toBeTruthy();

    const title = screen.getByTestId('mission-card-failures-text');
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent('Some bad things');
  });
});
