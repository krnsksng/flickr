import React, {useState} from 'react'

const SearchBar = (props) => {

    const [term, setTerm] = useState('');

    const updateField = (e) => {
        setTerm(e.target.value)
    }

    const bar = (
    <center>
        <div className="ui action input" style={{ marginTop: 16}}>
            <input type="text" placeholder="Search images..." onChange={updateField} />
            <button className="ui button">Search</button>
        </div>
    </center>
    )

    return bar
}

export default SearchBar
