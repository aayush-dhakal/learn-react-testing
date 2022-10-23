// you can also use .spec extension instead of test to specify test files

import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

// test("Greet renders correctly", () => {
//   render(<Greet />); // first make sure the Greet component renders
//   const textElement = screen.getByText("Hello");
//   expect(textElement).toBeInTheDocument(); // check if the text Hello is present in the document
// });

// test("Greet renders with a name", () => {
//   render(<Greet name="Ram" />);
//   const textElement = screen.getByText("Hello Ram");
//   expect(textElement).toBeInTheDocument();
// });

// Grouping the tests
describe('Greet', () => {
  // use describe.only or describe.skip for only running or skipping that particular test respectively
  test('Greet renders correctly', () => {
    render(<Greet />) // first make sure the Greet component renders
    const textElement = screen.getByText('Hello stranger')
    expect(textElement).toBeInTheDocument() // check if the text Hello is present in the document
  })

  test('Greet renders with a name', () => {
    render(<Greet name="Shyam" />)
    const textElement = screen.getByText('Hello Shyam')
    expect(textElement).toBeInTheDocument()
  })
})
