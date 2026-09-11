import { useStoryblok } from '@storyblok/react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer'

function App() {
  const headerStory = useStoryblok('header', {
    version: 'draft',
  })

  const footerStory = useStoryblok('footer', {
    version: 'draft',
  })

  if (!headerStory?.content || !footerStory?.content){
    return <div>Loading...</div>
  }

  return (
    <div>
      <Header header={headerStory.content} />
      <Footer footer={footerStory.content} />
    </div>
  )
}

export default App