import React, { PropTypes } from 'react';
import './text.css';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      withError: false,
    };
  }

  change(event) {
    this.setState({
      value: event.target.value,
      withError: !this.props.validate(event.target.value),
    });
  }

  render() {
    const { name, value, placeholder } = this.props;
    return (
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={e => this.change(e)}
        className={this.state.withError ? 'has-error' : ''}
        onBlur={e => this.change(e)}
      />
    );
  }
}

Text.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  validate: PropTypes.func,
};

export default Text;
