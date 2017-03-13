import React, { Component } from 'react';

import Quotes from './components/quotes';

class Hello extends Component {
  render() {
    const quote = {
      value: 'Test Quote',
      author: 'Siva'
    }
    return <div><Quotes quote={quote} /></div>
  }
}

export default Hello;