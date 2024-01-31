import CardTilt from '../cardComponent/cardComponent';
import { CreateAlbumRepository } from '../../main/albums/infrastructure/getAlbums.service';
import React from 'react';
import { getAlbums } from '../../main/albums/applications/getAlbum';
import { getAllAlbums } from '../../main/albums/applications/getAllAlbums';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

interface AlbumListProps {
  handleAlbumClick?: (userId: number) => void;
}

const AlbumList: React.FC<AlbumListProps> = ({ handleAlbumClick }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get('userId');
  const aRepository = CreateAlbumRepository();

  const queryKey = userId ? ["albums", userId] : ["albums"];

  const { data: albums } = useQuery(queryKey, () => {
    return userId ? getAlbums(aRepository, parseInt(userId, 10)) : getAllAlbums(aRepository);
  });

  return (
    <React.Fragment key='albumList'>
      {albums ? albums.map((album) => (
        <React.Fragment key={album.id}>
          <CardTilt
            content={
              <React.Fragment>
                <span>{album.title}</span>
              </React.Fragment>
            }
            onClick={() => handleAlbumClick && handleAlbumClick(album.id)}
            id={album.id}
          />
        </React.Fragment>
      )): null}
    </React.Fragment>
  );
};

export default AlbumList;
