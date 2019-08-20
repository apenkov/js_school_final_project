import React from 'react';

const FormList = ({ forms }) => {
  return (
    <div>
      <ul>
        {forms.map(form => {
          return <li key={form.id}>{form.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default FormList;
