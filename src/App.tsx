import './App.css'

import { CreateAlbumRepository } from'../src/main/albums/infrastructure/getAlbums.service'
import { getAlbum } from '../src/main/albums/applications/getAlbum'

function App() {

  const repository = CreateAlbumRepository();
  getAlbum(repository, 3)
  console.log(getAlbum(repository, 3))

  return (
    <>       
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
