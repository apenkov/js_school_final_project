import React, { Component } from 'react';
import FillForm from '../components/FillForm';

export default class FillFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = { fields: [] };
  }
  render() {
    return <FillForm fields={this.state.fields} />;
  }
}
