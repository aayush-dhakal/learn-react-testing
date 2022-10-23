// test files inside of folder with __tests__ name will execute automatically by jest

import { render, screen } from '@testing-library/react'
import { Greet } from '../greet'

describe('Greet', () => {
  // use describe.only or test.ony or fit and describe.skip or test.skip or xit for only running or skipping that particular test respectively
  test('Greet renders correctly', () => {
    render(<Greet />) // first make sure the Greet component renders
    const textElement = screen.getByText('Hello stranger')
    expect(textElement).toBeInTheDocument() // check if the text Hello is present in the document
  })

  // use either test or it
  it('Greet renders with a name', () => {
    //
    render(<Greet name="Shyam" />)
    const textElement = screen.getByText('Hello Shyam')
    expect(textElement).toBeInTheDocument()
  })
})
