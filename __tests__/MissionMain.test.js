import { render, screen } from '@testing-library/react';
import MissionMain from '../components/MissionMain';

describe('MissionMain', () => {
  it('renders the component', () => {
    render(<MissionMain />);
    const component = screen.getByTestId('mission-main');
    expect(component).toBeTruthy();
  });
});
