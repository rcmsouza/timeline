import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import "./global.css"

import styles from './App.module.css'

function App() { 

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
           author="Renan Camargo" 
           content="Lorem ipsum"
          />
          <Post
           author="Thais Rodrigues" 
           content="Lorem ipsum"
          />
        </main>
      </div>
    </>
  )
}

export default App
