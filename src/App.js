import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Menu from './Components/Menu';
import Header from './Components/Header';

import Base from './Components/Base';
import Zayavki from './Components/Zayavki';
import People from './Components/People';
import Clients from './Components/Clients';
import Assets from './Components/Assets';
import Settings from './Components/Settings';

function App() {
  return (
    <div className="flex-container">
      <div className="menuBlock">
        <div className="menu">
          <Menu />
        </div>
      </div>
      <div className="rightarea">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Switch>
            <Route path='/base' exact component={Base}/>
            <Route path='/zayavki' component={Zayavki}/>
            <Route path='/people' component={People}/>
            <Route path='/clients' component={Clients}/>
            <Route path='/assets' component={Assets}/>
            <Route path='/settings' component={Settings}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
