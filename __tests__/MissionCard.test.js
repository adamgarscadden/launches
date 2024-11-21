import { render, screen } from '@testing-library/react';
import MissionCard from '../components/MissionCard';

describe('MissionCard', () => {
  it('the component renders', () => {
    render(<MissionCard />);
    const component = screen.getByTestId('mission-card');
    expect(component).toBeTruthy();
  });
});
