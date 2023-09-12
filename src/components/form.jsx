import PropTypes from 'prop-types';
import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.state = { name: "", userTimezone: ""};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  static get propTypes() {
    return {
      onFormSubmit: PropTypes.func
    };
  }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  handleInputChange({ target }) {
    const { name, value } = target;

    this.setState(prevForm => ({ ...prevForm, [name]: value}));
  }

  render() {
    return (
      <form
        className='form'
        onSubmit={(ev) => {
          ev.preventDefault();
          this.props.onFormSubmit(this.state);
          this.setState({ name: "", userTimezone: ""});
          this.nameRef.current.focus();
        }}
      >
        <div className='form-control'>
          <label htmlFor="name">Название</label>
          <input
            type="text"
            className='form-control__name'
            id='name'
            value={this.handleInputChange}
            ref={this.nameRef}
            autoComplete='off'
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor="uder-timezone">Временная зона</label>
          <input
            type="number"
            className='form-control__user-timezone'
            id='user-timezone'
            name='userTimezone'
            value={this.state.userTimezone}
            min="-12"
            max="14"
            onChange={this.handleInputChange}
            required
          />
        </div>
        <button
          className='form-control__button-add'
          type='submit'
        >
          Добавить
        </button>
      </form>
    );
  }
}