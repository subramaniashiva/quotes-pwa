import React, { PropTypes } from 'react';

const Quote = ({quote}) => (
  <div>
      <p>{quote.value}</p>
      <p>{quote.author}</p>
  </div>
)

Quote.propTypes = {
  quote: PropTypes.object.isRequired
}

export default Quote;