import { Component } from 'react/cjs/react.production.min';
import './App.css';
import { ToastContainer } from 'react-toastify';

// import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
  };
  handlequeryChange = ev => {
    this.setState({ searchQuery: ev });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handlequeryChange} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        <ToastContainer />
      </>
    );
  }
}

export default App;
