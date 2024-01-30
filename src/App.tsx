import './App.css'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import AlbumList from './ui/albumListComponent/AlbumList';
import ButtonAnimatedGradient from './ui/buttonComponent/buttonComponent';
import PhotoList from './ui/photoListComponent/PhotoList'
import UserList from './ui/userListComponent/UserList';

function App() {

  const handleUserClick = (userId: number) => {
    console.log(`Card clicked! UserId: ${userId}`);
  };

  function handleAlbumClick(id: number): void {
    console.log(`Card clicked! album: ${id}`);
  }

  return (
    <BrowserRouter>
      <section className="layout">
        <div className="header">
          <header>
            <Link to='/'>
              <ButtonAnimatedGradient title='USERS' />
            </Link>
            <Link to='/albums'>
              <ButtonAnimatedGradient title='ALBUMS' />
            </Link>
            <Link to='/photos'>
              <ButtonAnimatedGradient title='PHOTOS' />
            </Link>
          </header>
        </div>
        <div className="body">
          <Switch>
            <Route path='/' exact>
              <UserList handleUserClick={handleUserClick} />
            </Route>
            <Route path='/albums/:userId?'>
              <AlbumList handleAlbumClick={handleAlbumClick} />
            </Route>
            <Route path='/photos/:userId?'>
              <PhotoList  />
            </Route>
          </Switch>
        </div>

        <div className="footer">copyright: Yeray Díaz</div>
      </section>
    </BrowserRouter>
  );
}

export default App;
