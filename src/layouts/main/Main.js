import { createStore } from 'redux'
import Styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

// import components
import Card, { List } from '../../components/Card'

function Main() {
  return (
    <main style={{marginTop: '100px'}}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Switch>
              <Route path="/" exact>
                {posts.map(post => (
                  <Card 
                    title={ post.title } text={ post.text } 
                    img={ post.img } list={ post.list }
                    btnName={ post.btnName }
                    bgBtn={ post.bgBtn } colorBtn={ post.colorBtn } />
                ))}
              </Route>
              <Route path="/videos">
                {videos.map(video => (
                  <Card 
                    title={ video.title } text={ video.text } 
                    img={ video.img } list={ video.list }
                    btnName={ video.btnName }
                    bgBtn={ video.bgBtn } colorBtn={ video.colorBtn } />
                ))}
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main

const posts = [
  {
    img: 'https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    title: 'this is card title',
    text: 'this is card text',
    btnName: 'Add',
    bgBtn: 'bg-primary',
    colorBtn: 'text-white',
  },
  {
    img: 'https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png',
    title: 'this is card title',
    text: 'this is card text',
  },
  {
    img: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
    title: 'this is card title',
    text: 'this is card text',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    title: 'this is card title',
    text: 'this is card text',
  },
]

const videos = [
  {
    img: 'https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    title: 'this is video title',
    text: 'this is video text',
    btnName: 'Add video',
    bgBtn: 'bg-primary',
    colorBtn: 'text-white',
  },
  {
    img: 'https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png',
    title: 'this is card title',
    text: 'this is card text',
  },
  {
    img: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
    title: 'this is card title',
    text: 'this is card text',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    title: 'this is card title',
    text: 'this is card text',
  },
]