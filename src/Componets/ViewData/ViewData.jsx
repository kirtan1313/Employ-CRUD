import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Dropdown, Form, Row } from 'react-bootstrap'
import StudentImg from '../../assets/imags/dummy.png'
import { dropCat, getData } from '../Service/helper';
import { useNavigate } from 'react-router';


function ViewData() {
    const [viewData, setViewData] = useState(getData("StudentData"));
    console.log('viewData', viewData);

    console.log("viewData", viewData);

    let naviGate = useNavigate();

    const handleEdit = (id) => {
        naviGate(`/edit/${id}`);
    }

    const handleDelete = (id) => {
        const deletData = viewData.filter((data) => {
            return data.id !== id
        })

        localStorage.setItem("StudentData", JSON.stringify(deletData));
        setViewData(deletData);
    }


    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        

        let searchRecCopy = getData('StudentData');

        const searchRecord = searchRecCopy.filter((rec) => {
            return rec.fname.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setViewData(searchRecord);
        console.log("Search Result", searchRecord);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let searchRecCopy = getData('StudentData');

        const searchRecord = searchRecCopy.filter((rec) => {
            return rec.fname.toLowerCase().includes(search.toLowerCase());
        });
        setViewData(searchRecord);
        console.log("Search Result", searchRecord);
    };


    const handleShort = (type, key) => {
        let dataShort;

        switch (type) {
            case 'asc':
                dataShort = [...viewData].sort((firtsName, secondName) => {
                    return firtsName[key].localeCompare(secondName[key]);
                })
                break;

            case 'dsc':
                dataShort = [...viewData].sort((firtsName, secondName) => {
                    return secondName[key].localeCompare(firtsName[key]);
                })
                break;
        }
        setViewData(dataShort);
    }

    const [drop, setDrop] = useState(dropCat())

    useEffect(() => {
        setDrop(dropCat())
    }, [setViewData])





    return (
        <>
            <Container>
                <Row>
                    <div className='pt-5 d-flex'>
                        <Form onSubmit={handleSubmit} className='d-flex col-4 justify-content-end ps-4'>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                name='search'
                                value={search}
                                onChange={handleSearch}
                            />
                            <Button type='submit' variant='success' className='ms-2'>Search</Button>
                        </Form>

                        <div className="col-4 ps-5 d-flex justify-content-center">
                            <Button onClick={() => handleShort("asc", "fname")} className='col-2 me-1' variant='warning'>Low</Button>
                            <Button onClick={() => handleShort("dsc", "fname")} className='col-2' variant='danger'>High</Button>
                        </div>

                        <div className="col-4">
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    {
                                        drop.map((drop) => {
                                            return (

                                                <Dropdown.Item href="#/action-1">{drop}</Dropdown.Item>
                                            )
                                        })

                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>




                    <table className='mt-5'>
                        <thead  align='center'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Department</th>
                                <th>Position</th>
                                <th>Salary</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody   align='center'>
                            {
                                viewData.length > 0 ? viewData.map((employee) => {
                                    return (

                                        <tr>
                                            <td>{employee.id}</td>
                                            <td>{employee.fname}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.salary}</td>
                                            <td>{employee.age}</td>
                                            <td>{employee.department}</td>
                                            <td>{employee.position}</td>
                                            <td>
                                                <button className='btn btn-success' onClick={() => handleEdit(employee.id)}>Edit</button>
                                                <button className='btn btn-danger ms-2' onClick={() => handleDelete(employee.id)}>Delete</button>

                                            </td>
                                        </tr>
                                    )
                                }) :
                                    <div class="main_wrapper mt-5">
                                        <div class="main">
                                            <div class="antenna">
                                                <div class="antenna_shadow"></div>
                                                <div class="a1"></div>
                                                <div class="a1d"></div>
                                                <div class="a2"></div>
                                                <div class="a2d"></div>
                                                <div class="a_base"></div>
                                            </div>
                                            <div class="tv">
                                                <div class="cruve">
                                                    <svg
                                                        xml:space="preserve"
                                                        viewBox="0 0 189.929 189.929"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        version="1.1"
                                                        class="curve_svg"
                                                    >
                                                        <path
                                                            d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
                                  C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div class="display_div">
                                                    <div class="screen_out">
                                                        <div class="screen_out1">
                                                            <div class="screen">
                                                                <span class="notfound_text"><h3> NOT FOUND</h3></span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="lines">
                                                    <div class="line1"></div>
                                                    <div class="line2"></div>
                                                    <div class="line3"></div>
                                                </div>
                                                <div class="buttons_div">
                                                    <div class="b1"><div></div></div>
                                                    <div class="b2"></div>
                                                    <div class="speakers">
                                                        <div class="g1">
                                                            <div class="g11"></div>
                                                            <div class="g12"></div>
                                                            <div class="g13"></div>
                                                        </div>
                                                        <div class="g"></div>
                                                        <div class="g"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bottom">
                                                <div class="base1"></div>
                                                <div class="base2"></div>
                                                <div class="base3"></div>
                                            </div>
                                        </div>
                                        <div class="text_404">
                                            <div class="text_4041">4</div>
                                            <div class="text_4042">0</div>
                                            <div class="text_4043">4</div>
                                        </div>
                                    </div>

                            }
                        </tbody>
                    </table>




                    {/* {

                        viewData.length > 0 ? viewData.map((data) => {
                            return (
                                <Card style={{ width: '18rem' }} className='ms-5 mt-5'>
                                    <img src={StudentImg} alt="" className='img-fluid' />
                                    <Card.Body>
                                        <Card.Title className='fs-3 fw-bold'>{data.fname}</Card.Title>
                                        <p className='fs-5 fw-bold'>{data.email}</p>
                                        <p className='fs-5 fw-bold'>{data.password}</p>
                                        <button className='btn btn-success' onClick={() => handleEdit(data.id)}>Edit</button>
                                        <button className='btn btn-danger ms-2' onClick={() => handleDelete(data.id)}>Delete</button>


                                    </Card.Body>
                                </Card>
                            )
                        }) : <div class="main_wrapper">
                            <div class="main">
                                <div class="antenna">
                                    <div class="antenna_shadow"></div>
                                    <div class="a1"></div>
                                    <div class="a1d"></div>
                                    <div class="a2"></div>
                                    <div class="a2d"></div>
                                    <div class="a_base"></div>
                                </div>
                                <div class="tv">
                                    <div class="cruve">
                                        <svg
                                            xml:space="preserve"
                                            viewBox="0 0 189.929 189.929"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            class="curve_svg"
                                        >
                                            <path
                                                d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
                              C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div class="display_div">
                                        <div class="screen_out">
                                            <div class="screen_out1">
                                                <div class="screen">
                                                    <span class="notfound_text"><h3> NOT FOUND</h3></span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lines">
                                        <div class="line1"></div>
                                        <div class="line2"></div>
                                        <div class="line3"></div>
                                    </div>
                                    <div class="buttons_div">
                                        <div class="b1"><div></div></div>
                                        <div class="b2"></div>
                                        <div class="speakers">
                                            <div class="g1">
                                                <div class="g11"></div>
                                                <div class="g12"></div>
                                                <div class="g13"></div>
                                            </div>
                                            <div class="g"></div>
                                            <div class="g"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom">
                                    <div class="base1"></div>
                                    <div class="base2"></div>
                                    <div class="base3"></div>
                                </div>
                            </div>
                            <div class="text_404">
                                <div class="text_4041">4</div>
                                <div class="text_4042">0</div>
                                <div class="text_4043">4</div>
                            </div>
                        </div>

                    } */}
                </Row >
            </Container >
        </>
    )
}

export default ViewData
