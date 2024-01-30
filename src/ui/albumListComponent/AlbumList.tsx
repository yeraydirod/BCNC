import CardTilt from '../cardComponent/cardComponent';
import { CreateAlbumRepository } from '../../main/albums/infrastructure/getAlbums.service';
import React from 'react';
import { getAllAlbums } from '../../main/albums/applications/getAllAlbums';
import { useQuery } from 'react-query';

interface AlbumListProps {
  handleAlbumClick?: (id: number) => void;
}

const AlbumList: React.FC<AlbumListProps> = ({ handleAlbumClick }) => {
  const aRepository = CreateAlbumRepository();

  const {data: albums} = useQuery(["albums"], () => getAllAlbums(aRepository))

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
