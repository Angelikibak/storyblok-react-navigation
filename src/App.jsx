import { useStoryblok } from '@storyblok/react'
import Header from './components/Header/Header.jsx'

function App() {
  const story = useStoryblok('header', {
    version: 'draft',
  })

  if (!story?.content) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header header={story.content} />
    </div>
  )
}

export default App