import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import UserSignIn from "./pages/UserSignIn";
import Admin from './pages/Admin';
import UploadForm from './components/admin/UploadForm';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';


const NotFound = ()=>(
  <div className="flex flex-col justify-start">
    <div className="text-purple-800 font-bold text-6xl"> OOPs!</div>
    <div className="text-purple-800 text-2xl">Looks like you are on a page that does not exist</div>
  </div>
)

function App({currentUser}) {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/your-music' component={Main}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route path='/account/login' render={ props => !currentUser ? <UserSignIn {...props}/> : <Redirect to='/admin'/>}/>
        <Route exact path='/admin' render={ props => false ? <Redirect to='/account/login'/> : <Admin {...props}/>} />
        <Route path='/admin/upload/:id' component={UploadForm} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


export default connect(mapStateToProps)(App);


