import React, { PropTypes } from 'react';

const Quote = ({quote}) => (
  <div className='quote_comp'>
      <p className='quote_comp__text'>{quote.quote}</p>
      <p className='quote_comp__author'>- {quote.author}</p>
  </div>
)

Quote.propTypes = {
  quote: PropTypes.object.isRequired
}

export default Quote;
