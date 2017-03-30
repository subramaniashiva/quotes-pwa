import React, { PropTypes } from 'react';
import * as utils from 'utils/utils';

const Quote = ({quote}) => (
  <div className='quote_comp'>
      <p className='quote_comp__text'>{utils.decodeEntities(utils.stripHtmlTags(quote.content))}</p>
      <p className='quote_comp__author'>- {quote.title}</p>
  </div>
)

Quote.propTypes = {
  quote: PropTypes.object.isRequired
}

export default Quote;
