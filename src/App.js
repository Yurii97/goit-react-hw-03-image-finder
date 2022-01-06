import { Component } from 'react/cjs/react.production.min';
import './App.css';
import { ToastContainer } from 'react-toastify';

import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    query: '',
  };
  handlequeryChange = ev => {
    this.setState({ query: ev });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handlequeryChange} />

        <ToastContainer />
      </>
    );
  }
}

export default App;
