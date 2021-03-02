import { selectIsSigningIn } from '../../redux/user/user.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Login from './Login';
import WithSpinner from './with-spinner';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    loading: selectIsSigningIn
})

const LoginContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(Login)

export default LoginContainer;