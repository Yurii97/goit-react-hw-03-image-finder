import s from './ImageGallery.module.css';
import Button from '../Button/Button';
// import { toast } from 'react-toastify';
import { Component } from 'react/cjs/react.production.min';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Spiner from '../Spiner/Spiner';
import fetchImages from '../../service/image-api';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log('change');

      this.requestFetch([], 1);
    }
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevPage !== nextPage) {
      const { images, page } = this.state;
      this.requestFetch(images, page);
      // window.scrollTo({
      //   top: document.body.scrollHeight,
      //   behavior: 'smooth',
      // });
    }
  }
  handleChangePage = () => {
    this.setState({ page: this.state.page + 1 });
  };
  requestFetch(images, page) {
    console.log(page);
    fetchImages(this.props.searchQuery, page)
      .then(data =>
        this.setState({
          images: [...images, ...data.hits],
        })
      )
      .catch(error => this.setState({ error }))
      .finally(() =>
        this.setState({
          loading: false,
        })
      );
  }
  render() {
    const { images } = this.state;
    return (
      <>
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
        {this.state.loading && <Spiner />}
        {images.length > 0 && <Button clickBtn={this.handleChangePage} />}
      </>
    );
  }
}

export default ImageGallery;
