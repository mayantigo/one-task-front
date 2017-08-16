import React, { PropTypes } from 'react';
import './password.css';

class Password extends React.Component {
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
        type="password"
        name={name}
        value={value}
        placeholder={placeholder}
        className={this.state.withError ? 'has-error' : ''}
        onChange={e => this.change(e)}
        onBlur={e => this.change(e)}
      />
    );
  }
}

Password.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  validate: PropTypes.func,
};

Password.defaultProps = {
  placeholder: '',
  validate: () => true,
};

export default Password;
