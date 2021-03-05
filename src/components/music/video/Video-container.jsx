import { selectIsFetching } from '../../../redux/music/music.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Video from './Video-menu';
import WithSpinner from '../../with-spinner.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    loading: selectIsFetching
})

const VideoContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(Video)

export default VideoContainer;