import React from 'react';
import { connect } from 'react-redux';
import { setSearchEntry } from '../../../redux/music/music.actions';

class Form extends React.Component {

    state = {
        searchEntry: ''
    }
    updateSearchInput = e => {
        this.setState({searchEntry:e.target.value},()=>{
        this.props.setSearchEntry(this.state.searchEntry)
        })
        
    }
    render() {
        
        return (
            <form
            onSubmit={(e)=>e.preventDefault()}
                className="relative w-full max-w-md flex items-center justify-end bg-white border-2 border-purple-500 h-10 mt-8 overflow-hidden"
            >
                <input
                    type='text'
                    name='search'
                    placeholder='search your favorite song or artist...'
                    onChange={this.updateSearchInput}
                    value={this.state.searchEntry}
                    className="w-11/12 text-lg focus:outline-none border-2 border-white focus:bg-gray-200 px-2 h-full"
                />
                <div
                    className={`w-1/12 h-full flex items-center justify-center mx-1 bg-white`}
                >
                    <i className="text-purple-600 text-2xl fas fa-search"></i>
                </div>
            </form>

        )

    }
}

const mapDispatchToProps = dispatch => ({
    setSearchEntry: value => dispatch(setSearchEntry(value))
})

export default connect(null, mapDispatchToProps)(Form);