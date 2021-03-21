import React, { Fragment } from 'react';
import Form from './Form';
import Productos from './Productos';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Productos />
    </Fragment>
  );
}
