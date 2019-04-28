import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/details'

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                {/* <Route path="/home" exact render={() => <Home />}></Route>
                <Route path="/detail" exact render={() => <Detail />}></Route> *or */}
                <Route path="/home" exact component={Home} ></Route>
                <Route path="/detail" exact component={Detail} ></Route>
            </div>
        </BrowserRouter>  
    </Provider>
  );
}

export default App;
