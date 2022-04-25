import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import ArticleCard from '.'

test ('article card renders content correctly', () => {
  const article = {
    title: 'example title',
    id: 145367,
    imageUrl: 'https://spacenews.com/wp-content/uploads/2022/04/Vignette-BlackSky-Enhanced-Site-Monitoring-Barcelona-04182022-scaled.jpg',
    url: 'https://spacenews.com/a-boom-in-earth-observation-satellites-creating-new-demands-for-intelligence/',
    newsSite: 'SpaceNews',
    summary: 'some description in here',
    publishedAt: '2022-04-25T13:34:18.000Z',
    launches: [],
    events: []
  }
  render(<ArticleCard article={article} index={article.id} />)

  const title = screen.getByText('example title')
  expect(title).toBeDefined()
  const summary = screen.getByText('some description in here')
  expect(summary).toBeDefined()
  const site = screen.getByText('SpaceNews')
  expect(site).toBeDefined()
})