import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';

describe('ErrorBoundary Component', () => {
  // Mock component to simulate errors
  const ProblematicComponent = () => {
    throw new Error('Test error');
  };

  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <h1 data-testid="child">No errors</h1>
      </ErrorBoundary>
    );

    // Assert that children are rendered
    const child = screen.getByTestId('child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('No errors');
  });

  it('renders fallback UI when an error occurs in a child', () => {
    // Suppress the console error for clean test output
    jest.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    );

    // Assert that the fallback UI is displayed
    const fallbackUI = screen.getByText('Something went wrong.');
    expect(fallbackUI).toBeInTheDocument();

    // Restore console error after the test
    (console.error as jest.Mock).mockRestore();
  });
});
