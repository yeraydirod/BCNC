import CardTilt from '../cardComponent/cardComponent';
import { CreatePhotoRepository } from '../../main/photos/infrastructure/getPhotos.service';
import React from 'react';
import { getAllPhotos } from '../../main/photos/applications/getAllPhotos';
import { useQuery } from 'react-query';

interface PhotoListProps {
  handleAlbumClick?: (id: number) => void;
}

const PhotoList: React.FC<PhotoListProps> = ({ handleAlbumClick }) => {
  const pRepository = CreatePhotoRepository();

  const {data: photos} = useQuery(["photos"], () => getAllPhotos(pRepository))

  return (
    <React.Fragment key='albumList'>
      {photos ? photos.map((photo) => (
        <React.Fragment key={photo.id}>
          <CardTilt
            content={
              <React.Fragment>
                <span>{photo.title}</span>
              </React.Fragment>
            }
            onClick={() => handleAlbumClick && handleAlbumClick(photo.id)}
            id={photo.id}
          />
        </React.Fragment>
      )): null}
    </React.Fragment>
  );
};

export default PhotoList;
