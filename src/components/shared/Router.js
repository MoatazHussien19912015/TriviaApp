import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { DefaultLayout, /* titleTemplate, defaultRoute, */ routes } from '../../routes';
const Router = () => {
    return (
        <BrowserRouter>
            <DefaultLayout>
                <Switch>
                    {routes.map(route => (
                        <Route
                            path={route.path}
                            exact={true}
                            render={props => {
                                return <React.Fragment>
                                    <route.component {...props} />
                                </React.Fragment>
                            }}
                            key={route.path}
                        />
                    ))}
                </Switch>
            </DefaultLayout>
        </BrowserRouter>
    )
}

export default Router;
