import { render, screen } from '@testing-library/react';
import MissionCardImage from '../components/MissionCardImage';

describe('MissionCardImage', () => {
  it('the component renders', () => {
    render(<MissionCardImage image="/theImage" alt="Mission Badge" />);
    const component = screen.getByTestId('mission-card-image');
    expect(component).toBeTruthy();
  });
});
