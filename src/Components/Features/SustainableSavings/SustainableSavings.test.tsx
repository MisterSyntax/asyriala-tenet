import React from 'react';
import SustainableSavings from './SustainableSavings';
import { renderWithProviders } from 'utils/test-utils';
import { render, fireEvent, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const { ResizeObserver } = window;

beforeEach(() => {
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  }));
});

afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
});
test('Creating a WhiteLabel Partner', async () => {
  const user = userEvent.setup();
  renderWithProviders(
    <SustainableSavings />
  );
  //Handles loading state
  expect(screen.getByRole('progressbar')).toBeInTheDocument();

  //Once data is loaded shows the UX
  await waitFor(() => {
    expect(screen.getByRole('button', { name: 'Vehicle 2020 Audi Q5 Premium Plus 4D SUV 2.0T PHEV' })).toBeInTheDocument();
  });

  // Sees the savings for that car
  expect(screen.getByText('$774.31')).toBeInTheDocument();

  // Switch the car
  await user.click(screen.getByRole('button', { name: 'Vehicle 2020 Audi Q5 Premium Plus 4D SUV 2.0T PHEV' }));

  await user.click(screen.getByRole('option', { name: '2020 Tesla Model Y Performance 4D SUV' }));
  
   // Sees the savings for that car
   expect(screen.getByText('$735.62')).toBeInTheDocument();
});
window.ResizeObserver = ResizeObserver;