import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import HomeComponent from './home/HomeComponent';
import HomePage from './HomePage/HomePage';

function PublicRoutes() {
    return (
        <Switch>
            <Route  path={SLUGS.home} component={HomeComponent} />
            <Route path={SLUGS.login} component={HomeComponent} />
            {/* <Route path={SLUGS.login} render={() => <div>login</div>} /> */}
            <Route path={SLUGS.signup} render={() => <div>signup</div>} />
            <Route path={SLUGS.forgotPassword} render={() => <div>forgotPassword</div>} />
            <Route exact path= {SLUGS.homePage} component={HomePage}/>
            <Redirect to={SLUGS.login} />
        </Switch>
    );
}

export default PublicRoutes;
