import React, { Component } from 'react';
import Constructor from '../components/Constructor';

export default class ConstructorPage extends Component {
  constructor(props) {
    super(props);
    this.state = { fields: [], currentFieldType: 'text' };
  }
  render() {
    return <Constructor fields={this.state.fields} />;
  }
}
