import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setSearchEntry } from '../../../redux/music/music.actions';
import { withRouter } from 'react-router-dom';

const Form = ({ setSearchEntry, history, match }) => {
    const [searchEntry, updateEntry] = useState("");

    const updateSearchInput = e => {
        updateEntry(e.target.value);
    }
    return (
        <form
            className="relative w-full max-w-md flex items-center justify-end rounded-l bg-purple-800 h-10 py-1 mt-8"
            onSubmit={ (e) => {
                e.preventDefault()
                setSearchEntry(searchEntry)
                updateEntry('')
            }}
        >
            <input 
                type='text'
                name='search'
                placeholder='search your favorite artist...'
                onChange={updateSearchInput}
                value={searchEntry}
                className={`w-11/12 text-lg focus:outline-none px-2 h-full ml-1`}
            />
            <button
                type='submit'
                className={`w-1/12 h-full focus: text-gray-200 flex items-center justify-center border border-white z-10 mr-1`}
            >
                <i className="w-4 fas fa-search"></i>
            </button> 
        </form>
            
    )
}

const mapDispatchToProps = dispatch => ({
    setSearchEntry: value => dispatch(setSearchEntry(value))
})

export default withRouter(connect(null, mapDispatchToProps)(Form));