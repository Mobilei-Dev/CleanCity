import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // 👈 Important for `.toBeInTheDocument()`
import Admin from '../components/Admin';

// Setup mock localStorage data before each test
beforeEach(() => {
  const mockData = [
    { id: 1, name: 'John Doe', date: '2025-07-15', location: 'Kiambu', status: '' },
    { id: 2, name: 'Jane Doe', date: '2025-07-16', location: 'Nairobi', status: 'Missed' }
  ];
  localStorage.setItem('pickupRequests', JSON.stringify(mockData));
});

// Clear after each test
afterEach(() => {
  localStorage.clear();
});

describe('Admin Component', () => {
  test('renders admin page with summary info', () => {
    render(<Admin />);
    expect(screen.getByText(/Admin: Manage Requests/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Requests: 2/)).toBeInTheDocument();
    expect(screen.getByText(/Missed Pickups: 1/)).toBeInTheDocument();
  });

  test('displays request rows correctly', () => {
    render(<Admin />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  test('marks a request as Completed', () => {
    render(<Admin />);
    const completeButtons = screen.getAllByText('Complete');
    fireEvent.click(completeButtons[0]);

    expect(screen.getAllByText('Completed')[0]).toBeInTheDocument();
  });

  test('marks a request as Missed', () => {
    render(<Admin />);
    const missedButtons = screen.getAllByText('Missed');
    fireEvent.click(missedButtons[0]);

    // Should now have 2 "Missed" after updating one
    const missedStatuses = screen.getAllByText('Missed');
    expect(missedStatuses.length).toBeGreaterThan(1);
  });

  test('deletes a request', () => {
    // Mock confirm dialog to always return true
    window.confirm = jest.fn(() => true);

    render(<Admin />);
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
  });
});
