import { render, screen } from '@testing-library/react';
import MissionFooter from '../components/MissionFooter';

describe('MissionFooter', () => {
  it('renders the correct heading', () => {
    render(<MissionFooter />);
    const heading = screen.getByTestId('mission-footer');
    expect(heading).toHaveTextContent('SpaceX Launches');
  });
});
