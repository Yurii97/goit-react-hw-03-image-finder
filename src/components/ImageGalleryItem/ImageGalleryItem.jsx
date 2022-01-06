import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ key, webformatURL, largeImageURL, tags }) {
  return (
    <li key={key} data-source={largeImageURL} className={s.galleryItem}>
      <img src={webformatURL} alt={tags} className={s.galleryImage} />
    </li>
  );
}

export default ImageGalleryItem;
