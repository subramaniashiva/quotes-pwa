import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import { get_quote } from './redux/reducers/quotes';
import Quotes from './components/quotes';

class Hello extends Component {
  componentDidMount() {
    this.props.dispatch(get_quote());
  }
  render() {
    return <div><Quotes quote={this.props.quotes || {}} /></div>
  }
}
Hello.propTypes = {
  quotes: PropTypes.object
}
const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}
export default connect(
  mapStateToProps
)(Hello);