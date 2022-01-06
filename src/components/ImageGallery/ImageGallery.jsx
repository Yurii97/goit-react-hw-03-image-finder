import s from './ImageGallery.module.css';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ pictures }) {
  return (
    <ul className={s.gelleryList}>
      {pictures.hits.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          webformatURL={picture.webformatURL}
          largeImageURL={picture.largeImageURL}
          tags={picture.tags}
        />
      ))}
      <Button />
    </ul>
  );
}

export default ImageGallery;
