import React, { useState } from 'react'
import { getData } from '../Service/helper';
import { Button, Form } from 'react-bootstrap';

function SearchBar() {

    const [viewData, setViewData] = useState(getData("StudentData"));
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let searchRecCopy = viewData;

        const searchRecord = searchRecCopy.filter((rec) => {
            return rec.fname.toLowerCase().includes(search.toLowerCase());
        });
        setViewData(searchRecord);
        console.log("Search Result", searchRecord);
    };



    return (
        <>
            {/* <Form onSubmit={handleSubmit} className='d-flex col justify-content-end'>
                <Form.Control
                    type="text"
                    placeholder="Search"
                    name='search'
                    value={search}
                    onChange={handleSearch}
                />
                <Button type='submit'>Search</Button>
            </Form> */}
        </>
    )
}

export default SearchBar;
