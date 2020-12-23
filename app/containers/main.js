/*
  React Container (stateful component)
  This is the main container where the application loads
  Dispatches get_quote and get_backup_quote when the component is mounted
  Shows either the loading component or quote component based on store state
*/
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import { get_quote } from 'redux/reducers/quotes';
import { get_backup_quote } from 'redux/reducers/backup';

import Quotes from 'components/quotes';
import Loading from 'components/loading';

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(get_quote());

    this.props.dispatch(get_backup_quote());
  }
  componentWillReceiveProps(nextProps) {
    // Update the local storage when new props is recieved
    // Write in localStorage only when it is empty
    nextProps.backup && 
      localStorage.setItem('backup', JSON.stringify(nextProps.backup));
  }
  // Helper function to return the quote
  // If the quote is not there, then quote from backup is returned
  computeQuote() {
    if(this.props.quotes && this.props.quotes.content) {
      return this.props.quotes;
    } else if (this.props.backup && this.props.backup.content) {
      let storedQuote = localStorage.getItem('backup') && JSON.parse(localStorage.getItem('backup'));
      return storedQuote || {};
    } else {
      return {};
    }
  }
  render() {
    return <div className='quote'>
      {!this.props.loading? 
        (
          <div>
            <div className='quote__container'>
              <Quotes quote={this.computeQuote()} />
            </div>
            <button className='quote__btn' onClick={() => this.props.dispatch(get_quote())} >Another Quote</button>
          </div>
        ) : <div className='quote__load'><Loading /></div>
      }
    </div>
  }
}

Main.propTypes = {
  quotes: PropTypes.object,
  loading: PropTypes.bool,
  backup: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
    loading: state.loading,
    backup: state.backup
  }
}

export default connect(
  mapStateToProps
)(Main);
