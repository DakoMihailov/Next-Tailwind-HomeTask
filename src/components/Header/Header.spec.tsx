import React from 'react'
import { render, screen } from '@testing-library/react'

import Header from './Header'

// Just a sample test.
describe('Header Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Header setToastStatus={() => {}} />)
    expect(container).toMatchSnapshot()
  })

  it('renders The Location has been updated', () => {
    // Given
    const text = 'The Location has been updated'
    render(<Header setToastStatus={() => {}} />)
    // When
    const actual = screen.getByRole('maintext')

    // Then
    expect(actual).toBeInTheDocument()
    expect(actual.textContent).toBe(text)
    expect(actual.className).toBe('font-normal font-5xl font-info')
  })
})
