import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/music/header/Header';
import Audio from '../components/music/audio/Audio';
import Video from '../components/music/video/Video';

const Main = ({ match }) => {
    return (
        <div className="w-full">
            <Header />
            <Switch>
                <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/audio`} />} />
                <Route path={`${match.url}/audio`} render={() => <Audio category="audio"/>} />
                <Route path={`${match.url}/gospel`} render={() => <Audio category="gospel" />} />
                <Route path={`${match.url}/highlife`} render={() => <Audio category="highlife" />} />
                <Route path={`${match.url}/video`} render={() => <Video />} />
            </Switch>
        </div>
    )
}


export default Main;