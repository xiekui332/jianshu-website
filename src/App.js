import React from 'react';
import { Provider } from 'react-redux'
import { Route, HashRouter  } from 'react-router-dom'
import store from './store'
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/details/loadable'
import Login from './pages/login'

function App() {
  return (
    <Provider store={store}>
        <HashRouter>
            <div>
                <Header />
                {/* <Route path="/home" exact render={() => <Home />}></Route>
                <Route path="/detail" exact render={() => <Detail />}></Route> *or */}
                <Route path="/login" exact component={Login} ></Route>
                <Route path="/home" exact component={Home} ></Route>
                <Route path="/" exact component={Home} ></Route>
                <Route path="/detail/:id" exact component={Detail} ></Route>
            </div>
        </HashRouter>  
    </Provider>
  );
}

export default App;
