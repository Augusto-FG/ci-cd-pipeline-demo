import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  test('renders heading and image', () => {
    render(<App />)
    // check heading
    const heading = screen.getByText(/CD \/ CI/i)
    expect(heading).toBeTruthy()

    // check image by alt text
    const img = screen.getByAltText(/React logo/i)
    expect(img).toBeTruthy()
  })
})
