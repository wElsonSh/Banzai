import '@/app/styles/fonts.scss'
import '@/app/styles/global.scss'
import { Board, SideBar } from '@/widgets'

function App() {

  return (
    <main className='wrapper'>
      <SideBar />
      <Board />
    </main>
  )
}

export default App
