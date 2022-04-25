import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import ArticleDetails from '.'

test('renders button', () => {
  const handleOpen = () => console.log('modal open')
  render(<ArticleDetails handleOpen={handleOpen} />)
  const el = screen.getByText('View More')
  expect(el).toBeDefined()
})