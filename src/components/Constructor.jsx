import React from 'react';
import fieldTypes from '../config/fieldTypes';

const Constructor = ({ fields }) => {
  return (
    <div className="columns">
      <div className="column is-two-thirds">
        <h2>page</h2>
        <div>label</div>
        <input className="input" type="text" placeholder="e.g Alex Smith" />
      </div>
      <div className="column is-one-thirds">
        {fieldTypes.map(fieldType => {
          return (
            <div className="field-type">
              <a className="button is-large is-fullwidth">{fieldType}</a>
            </div>
          );
        })}
        <form className="options">
          <div className="field">
            <label className="label">label</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="e.g Alex Smith"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">placeholder</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Constructor;
