import { selectIsFetching } from '../../../redux/music/music.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Audio from './Audio-menu';
import WithSpinner from '../../with-spinner.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    loading: selectIsFetching
})

const AudioContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(Audio)

export default AudioContainer;