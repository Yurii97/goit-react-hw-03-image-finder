import s from './ImageGallery.module.css';
import Button from '../Button/Button';
import { Component } from 'react/cjs/react.production.min';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const KEY = '24124599-81915d8fff3f3b2b5bfb5c22e';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log('change');
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchQuery}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(resp => resp.json())
        .then(data =>
          this.setState({
            images: [...data.hits],
          })
        );
    }
  }
  render() {
    return (
      <ul className={s.gelleryList}>
        {this.state.images.map(picture => (
          <li key={picture.id} className={s.galleryItem}>
            <ImageGalleryItem
              webformatURL={picture.webformatURL}
              largeImageURL={picture.largeImageURL}
              tags={picture.tags}
            />
          </li>
        ))}

        <Button />
      </ul>
    );
  }
}

export default ImageGallery;
