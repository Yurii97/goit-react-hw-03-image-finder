import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, largeImageURL, tags }) {
  return (
    <img
      src={webformatURL}
      alt={tags}
      className={s.galleryImage}
      data-source={largeImageURL}
    />
  );
}

export default ImageGalleryItem;
