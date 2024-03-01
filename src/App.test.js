import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App/>", () => {
  it("Renders without crashing", () => {
    const { getByText } = render(<App />);
    expect(getByText("What's on the schedule today?")).toBeInTheDocument();
  });
});