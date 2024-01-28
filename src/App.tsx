import './App.css'

import { getAlbums } from './services/getAlbums/getAlbums';
import { getPhotos } from './services/getPhotos/getPhotos';
import { getUsers } from './services/getUsers/getUsers'

function App() {
  getUsers();
  getAlbums();
  getPhotos();


  return (
    <>       
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
