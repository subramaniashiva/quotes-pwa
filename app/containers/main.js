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
    nextProps.backup && nextProps.backup.length > 1 && 
      !(localStorage.getItem('backup')) && localStorage.setItem('backup', JSON.stringify(nextProps.backup));
  }
  computeQuote() {
    if(this.props.quotes && this.props.quotes.quote) {
      return this.props.quotes;
    } else if (this.props.backup && this.props.backup.length) {
      let storedQuote = localStorage.getItem('backup') && JSON.parse(localStorage.getItem('backup'));
      return storedQuote ? storedQuote[Math.floor(Math.random() * storedQuote.length)]: this.props.backup[0];
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
  backup: PropTypes.array
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
