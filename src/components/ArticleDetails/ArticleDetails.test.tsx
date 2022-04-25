import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
import ArticleDetails from '.'

/* test('clicking the article details button opens the modal', async () => {
  const mockHandler = jest.fn()

  const user = userEvent
  
  render(<ArticleDetails />)

  const button = screen.getByTestId('article-btn')
  await user.click(button)
  
  expect(mockHandler.mock.calls).toHaveLength(1)
}) */

test('renders button', () => {
  const handleOpen = () => console.log('modal open')
  render(<ArticleDetails handleOpen={handleOpen} />)
  const el = screen.getByText('View More')
  expect(el).toBeDefined()
})