// src/__tests__/App.test.js
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders the CleanCity branding', () => {
    render(<App />);
    const brandElements = screen.getAllByText((text) => text.includes('CleanCity'));
    expect(brandElements.length).toBeGreaterThan(0);
  });

  test('renders the login heading when routed to /login', async () => {
    // Simulate navigation before rendering
    window.history.pushState({}, '', '/login');
    render(<App />);

    // Debug the DOM if it still fails
    // screen.logTestingPlaygroundURL();

    // Adjust this if your heading text is different (e.g., 'Sign In' vs 'Login')
    expect(await screen.findByRole('heading', { name: /login/i })).toBeInTheDocument();
  });
});
