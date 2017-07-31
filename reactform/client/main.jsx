import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter , Route, Link} from 'react-router-dom'
import { App , Main } from '../imports/ui/App.jsx';
import { New }  from '../imports/ui/New.jsx';
import Info from '../imports/ui/Info.jsx';
// import Radio from '../imports/ui/Radio.jsx';
Meteor.startup(() => {
  render((
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/add" component={New} />
        <Route path="/list" component={Info}/>
      </div>
    </BrowserRouter>), document.getElementById('render-target'));
});
