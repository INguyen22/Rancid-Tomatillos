import React from 'react'
import './Form.css'

const Form = ({ searchQuery, onSearchQueryChange }) => {

    return (
        <form className='search-bar'>
            <input 
                type='text'
                placeholder='Search by Movie Title 🔍'
                name='searchQuery'
                value={searchQuery}
                onChange={event => onSearchQueryChange(event)}
            />
        </form>
    )
}

export default Form