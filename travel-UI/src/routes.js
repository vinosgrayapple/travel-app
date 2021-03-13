import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Main from 'pages/Main'
import Country from 'pages/Counrty'
import SignIn from './components/auth/SignIn'
import ROUTES from 'constants/routes'


export const useRoutes = (isAuth) => {
	if (isAuth) {
		return (
			<Switch>
				<Route exact path={ROUTES.MAIN}>
					<Main />
				</Route>
				<Route path={ROUTES.COUNTRY}>
					<Country />
				</Route>
				<Redirect to={ROUTES.MAIN} />
			</Switch>
		)
	}
	return (
		<Switch>
			<Route exact path={ROUTES.SIGNIN}>
        <SignIn />
			</Route>
      <Redirect to={ROUTES.SIGNIN} />
		</Switch>
	)
}
