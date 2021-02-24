import { selectIsFileFetching } from '../../redux/files/files.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Audio from './Audio-menu';
import WithSpinner from '../../with-spinner.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    loading: selectIsFileFetching
})

const FileListContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(Audio)

export default AudioContainer;