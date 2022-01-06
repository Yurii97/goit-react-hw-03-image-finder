import { Component } from 'react/cjs/react.production.min';
import toast from 'react-hot-toast';
import { ImSearch } from 'react-icons/im';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = ev => {
    this.setState({ inputValue: ev.currentTarget.value.toLowerCase() });
  };
  handleSubmit = ev => {
    ev.preventDefault();
    if (this.state.inputValue.trim() === '') {
      toast.error('Поле пошуку пусте');
      return;
    }
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <ImSearch className={s.button_icon} />
          </button>

          <input
            className={s.input}
            type="text"
            // autocomplete="off"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
