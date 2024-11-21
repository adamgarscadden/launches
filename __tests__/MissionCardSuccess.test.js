import { render, screen } from '@testing-library/react';
import MissionCardSuccess from '../components/MissionCardSuccess';

describe('MissionCardSuccess', () => {
  it('the component renders when success is true', () => {
    render(<MissionCardSuccess success={true} />);
    const component = screen.getByTestId('mission-card-success');
    expect(component).toBeTruthy();

    const title = screen.getByTestId('mission-card-success-true');
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent('success');
  });

  it('the component renders when success is false', () => {
    render(<MissionCardSuccess success={false} />);
    const component = screen.getByTestId('mission-card-success');
    expect(component).toBeTruthy();

    const title = screen.getByTestId('mission-card-success-false');
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent('failure');
  });
});
