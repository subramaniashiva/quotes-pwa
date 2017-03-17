import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import { get_quote } from 'redux/reducers/quotes';

import Quotes from 'components/quotes';
import Loading from 'components/loading';

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(get_quote());
  }
  render() {
    return <div>
      {!this.props.loading? 
        (
          <div>
            <Quotes quote={this.props.quotes || {}} />
            <button onClick={() => this.props.dispatch(get_quote())} >Another Quote</button>
          </div>
        ) : <Loading />
      }
    </div>
  }
}

Main.propTypes = {
  quotes: PropTypes.object,
  loading: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
    loading: state.loading
  }
}

export default connect(
  mapStateToProps
)(Main);