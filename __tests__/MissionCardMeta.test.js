import { render, screen } from '@testing-library/react';
import MissionCardMeta from '../components/MissionCardMeta';

describe('MissionCardMeta', () => {
  it('the component renders', () => {
    render(<MissionCardMeta title="Launch Date" text="xyz" />);
    const component = screen.getByTestId('mission-card-meta');
    expect(component).toBeTruthy();

    const title = screen.getByTestId('mission-card-meta-title');
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent('Launch Date');

    const text = screen.getByTestId('mission-card-meta-text');
    expect(text).toBeTruthy();
    expect(text).toHaveTextContent('xyz');
  });
});
