import {BrowserRouter as Router} from 'react-router-dom'
import Bar from './pages/Main/Bar'
import Footer from './pages/Main/Footer'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
const App = () => {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
    <Router>
    <Bar/>
      {routes}
    <Footer/>
    </Router>
    </AuthContext.Provider>
  );
};

export default App;
