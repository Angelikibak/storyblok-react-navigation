import { useStoryblok } from '@storyblok/react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer'
import Teaser from './components/Teaser/Teaser.jsx'

function App() {
  const headerStory = useStoryblok('header', {
    version: 'draft',
  })

  const footerStory = useStoryblok('footer', {
    version: 'draft',
  })

  const homeStory = useStoryblok('home', {
  version: 'draft',
  })

  if (!headerStory?.content || !footerStory?.content || !homeStory?.content) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header header={headerStory.content} />
      <Teaser blok={homeStory.content.body[0]} />
      <Footer footer={footerStory.content} />
    </div>
  )
}

export default App