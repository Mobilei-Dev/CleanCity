
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import Home from '../components/Home';

describe('Home Component — Unit Tests', () => {
  test('TC-001: Heading is rendered', () => {
    act(() => {
      render(<Home />);
    });
    const heading = screen.getByRole('heading', {
      name: /schedule a waste pickup/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test('TC-002: Shows error when form is submitted with missing fields', () => {
    act(() => {
      render(<Home />);
    });
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    expect(screen.getByText(/please fill in all required fields/i)).toBeInTheDocument();
  });

  test('TC-003: Submits valid form and shows success message', () => {
    act(() => {
      render(<Home />);
    });
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/address/i), {
      target: { value: '123 Main St' },
    });
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    expect(screen.getByText(/pickup scheduled successfully/i)).toBeInTheDocument();
  });
});
