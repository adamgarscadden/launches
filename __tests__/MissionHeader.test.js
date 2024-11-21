import { render, screen } from '@testing-library/react';
import MissionHeader from '../components/MissionHeader';

describe('MissionHeader', () => {
  it('renders the correct heading', () => {
    render(<MissionHeader />);
    const heading = screen.getByTestId('mission-title');
    expect(heading).toHaveTextContent('🌕 SpaceX Launches 🚀');
  });
});
