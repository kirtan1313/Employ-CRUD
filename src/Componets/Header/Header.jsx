import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getData } from '../Service/helper';
import SearchBar from '../SearchBar/SearchBar';


const Header = () => {
  // const [viewData, setViewData] = useState(getData("StudentData"));
  // const [search, setSearch] = useState('');

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let searchRecCopy = viewData;

  //   const searchRecord = searchRecCopy.filter((rec) => {
  //     return rec.fname.toLowerCase().includes(search.toLowerCase());
  //   });
  //   setViewData(searchRecord);
  //   console.log("Search Result", searchRecord);
  // };




  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" className='ms-4'>KIRTAN</Navbar.Brand>
      <Nav className="mr-auto col-6">
        <Nav.Link as={Link} to="/createform">Create</Nav.Link>
        <Nav.Link as={Link} to="/">View</Nav.Link>
      </Nav>

      <SearchBar />



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
    </Navbar>
  );
};

export default Header;
