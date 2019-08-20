import React, { Component } from 'react';
import FormList from '../components/FormList';

const forms = [
  {
    title: 'form one',
    id: 123,
  },
  {
    title: 'form two',
    id: 123123,
  },
];

export default class FormListPage extends Component {
  constructor(props) {
    super(props);
    this.state = { forms };
  }

  render() {
    return <FormList forms={forms} />;
  }
}
