import s from './ImageGallery.module.css';
import Button from '../Button/Button';
import { Component } from 'react/cjs/react.production.min';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Spiner from '../Spiner/Spiner';
const KEY = '24124599-81915d8fff3f3b2b5bfb5c22e';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log('change');
      this.setState({ images: [], page: 1 });
      this.requestFetch();
    }
  }
  // handlePageChange = () => {
  //   this.setState({ page: this.state.page + 1 });
  // };
  requestFetch = () => {
    const { images, page } = this.state;
    fetch(
      `https://pixabay.com/api/?q=${this.props.searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          images: [...images, ...data.hits],
          page: page + 1,
        })
      );
  };
  render() {
    const { images } = this.state;
    return (
      <>
        <Spiner />
        <ul className={s.gelleryList}>
          {images.map(picture => (
            <li key={picture.id} className={s.galleryItem}>
              <ImageGalleryItem
                webformatURL={picture.webformatURL}
                largeImageURL={picture.largeImageURL}
                tags={picture.tags}
              />
            </li>
          ))}
        </ul>
        {images.length > 0 && <Button clickBtn={this.requestFetch} />}
      </>
    );
  }
}

export default ImageGallery;
