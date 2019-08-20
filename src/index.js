import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Constructor from './containers/ConstructorPage';
import FillForm from './containers/FillFormPage';
import FormList from './containers/FormListPage';
import NavBar from './components/NavBar';
import 'bulma/css/bulma.min.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Route path="/" exact component={FormList} />
        <Route path="/constructor/" component={Constructor} />
        <Route path="/fill-form/" component={FillForm} />
      </div>
    </Router>
  );
};

const rootElement = document.getElementById('root');
render(<App />, rootElement);

{
  /* <Link to="/"> All forms</Link>
<Link to="/fill-form/">fill form</Link>
<Link to="/constructor/"> constructor</Link> */
}
