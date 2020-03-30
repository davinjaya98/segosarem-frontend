import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import * as serviceWorker from './serviceWorker';

// ** Import custom components for redux**
import { Provider } from 'react-redux';
import store from './store/index';
import App from "./components/app";

// Advance
import Maintenance from './pages/maintenance';
// import Error403 from './pages/errors/error403';
import Error404 from './pages/errors/error404';
// import Error500 from './pages/errors/error500';
import Signin from './auth/signin';

//Own Pages
import Dashboard from './pages/dashboard';
import PageSetting from './pages/pageSetting';
import PortalConfig from './pages/portalConfig';
import Quotation from './pages/quotation';
import CustomDataGroup from './pages/customDataGroup';
import CustomData from './pages/customData';

//firebase Auth
function Root() {
    const abortController = new window.AbortController();
    // Change this to actual user token
    const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
        const themeColor = localStorage.getItem('theme-color')
        const layout = localStorage.getItem('layout_version')
        // Change this to actual user token
        // app.auth().onAuthStateChanged(setCurrentUser);
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/${themeColor}.css`);
        document.body.classList.add(layout);

        return function cleanup() {
            abortController.abort();
        }

    }, []);

    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter basename={`/`}>
                    <ScrollContext>
                        <Switch>
                            <Route path={`${process.env.PUBLIC_URL}/login`} component={Signin} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/maintenance`} component={Maintenance} />
                            {/* <Route path={`${process.env.PUBLIC_URL}/pages/errors/error403`} component={Error403} /> */}
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error404`} component={Error404} />
                            {/* <Route path={`${process.env.PUBLIC_URL}/pages/errors/error500`} component={Error500} /> */}
                            {currentUser !== null ?
                                <Fragment>
                                    <App>
                                        {/* dashboard menu */}
                                        <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                                            return (<Redirect to={`${process.env.PUBLIC_URL}/login`} />)
                                        }} />

                                        {/* Segosarem */}
                                        <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
                                        <Route path={`${process.env.PUBLIC_URL}/pageSetting`} component={PageSetting} />
                                        <Route path={`${process.env.PUBLIC_URL}/portalConfig`} component={PortalConfig} />
                                        <Route path={`${process.env.PUBLIC_URL}/quotation`} component={Quotation} />
                                        <Route path={`${process.env.PUBLIC_URL}/customDataGroup`} component={CustomDataGroup} />
                                        <Route path={`${process.env.PUBLIC_URL}/customData`} component={CustomData} />
                                    </App>
                                </Fragment>
                                :
                                <Redirect to={`${process.env.PUBLIC_URL}/login`} />
                            }
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();