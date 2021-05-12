import { connect } from 'react-redux';
import { googleSignInStart } from '../../redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectError, selectSuccess } from '../../redux/user/user.selector';

const Login = ({ history, match, googleSignInStart, error, success }) => {
    const handleSubmit = async event => {
        event.preventDefault()
        googleSignInStart()
    }

    // const handleClick = () => {
    //     history.push(`${match.path}/reset-password`)
    // }

    return (
        <div style={{ background: 'rgb(0,0,0,0.5)' }} className="w-full h-screen flex justify-start items-center">
            <form onSubmit={(event) => handleSubmit(event)} className="w-full h-full sm:max-w-lg flex flex-col items-start justify-start bg-purple-100 border-2 border-gray-300 shadow-lg rounded p-6">
                <div className="w-full flex items-center justify-start my-6">
                    <button type="submit" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 font-medium text-white px-16 py-4 rounded focus:outline-none">Continue with Google</button>
                </div>
                {/* <button onClick={handleClick} className="w-full md:w-auto border-2 border-pink-600 text-pink-600 px-16 py-4 rounded-lg md:mr-4 mb-4 focus:outline-none">Forgot password?</button> */}
                {
                    !!error
                        ? <div className="w-full sm:max-w-lg text-left text-lg text-red-500 font-serif bg-white p-6 rounded">{error}</div>
                        : null
                }
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: user => dispatch(googleSignInStart(user)),
})

const mapStateToProps = createStructuredSelector({
    error: selectError,
    success: selectSuccess
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
