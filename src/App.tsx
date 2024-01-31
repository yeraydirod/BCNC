import './App.css'

import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import AlbumList from './ui/albumListComponent/AlbumList';
import ButtonAnimatedGradient from './ui/buttonComponent/buttonComponent';
import PhotoList from './ui/photoListComponent/PhotoList'
import React from 'react';
import UserList from './ui/userListComponent/UserList';

function App() {
  const navigate = useNavigate()
  const handleUserClick = (userId: number) => {
    navigate(`/albums?userId=${userId}`);
  };

  function handleAlbumClick(id: number): void {
    navigate(`/photos?id=${id}`);
  }

  return (
    <React.Fragment>
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
          <Routes>
            <Route path="/" element={<UserList handleUserClick={handleUserClick} />} />
            <Route path="/albums" element={<AlbumList handleAlbumClick={handleAlbumClick} />} />
            <Route path="/albums?userId" element={<AlbumList handleAlbumClick={handleAlbumClick} />} />
            <Route path="/photos" element={<PhotoList />} />
            <Route path="/photos?id" element={<PhotoList />} />
          </Routes>
        </div>
        <div className="footer">copyright: Yeray Díaz</div>
      </section>
    </React.Fragment>
  );
}

export default App;
