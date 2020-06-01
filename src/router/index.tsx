import * as React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import Todo from '../pages/Todo';


const InitRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/todo" component={Todo} />
        </Switch>
    </HashRouter>
)

export default InitRoute
