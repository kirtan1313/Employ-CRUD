import React, { useEffect, useState } from 'react'
import generateUniqueId from 'generate-unique-id';
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandSamsungpass } from "react-icons/tb";
import { getData } from '../Service/helper';
import { useNavigate } from 'react-router';

function CreateForm() {

    const [input, setInput] = useState({
        id: '',
        fname: '',
        email: '',
        salary: '',
        age: '',
        department: '',
        position: ''
    })

    const [viewData, setViewData] = useState(getData("StudentData"));
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate()

    const handleCreate = (e) => {
        const { name, value } = e.target;

        setInput({ ...input, [name]: value });

    }



    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(input);

        const obj = {
            ...input,
            id: generateUniqueId({ length: 5, useLetters: false })
        }

        setViewData([...viewData, obj])

        setIsSubmit(true);

    }


    useEffect(()=>{
        localStorage.setItem("StudentData",JSON.stringify(viewData))
    },[viewData])

    useEffect(()=>{
        if(isSubmit){
            navigate('/');
        }
    },[isSubmit])





    return (
        <>

            <div className='createForm'>
                <form action="" class="form_main" onSubmit={handleSubmit}>
                    <p class="heading">Login</p>
                    <div class="inputContainer">
                        <CiUser />
                        <input type="text" class="inputField" id="username" placeholder="Username" name='fname' onChange={handleCreate} value={input.fname} />
                    </div>

                    <div class="inputContainer">
                        <span>
                            <HiOutlineMail />
                        </span>
                        <input type="email" class="inputField" id="email" placeholder="Email" name='email' onChange={handleCreate} value={input.email} />
                    </div>

                    <div class="inputContainer">
                        <TbBrandSamsungpass />
                        <input type="number" class="inputField" id="salary" placeholder="Salary" name='salary' onChange={handleCreate} value={input.salary} />
                    </div>

                    <div class="inputContainer">
                        <TbBrandSamsungpass />
                        <input type="number" class="inputField" id="age" placeholder="age" name='age' onChange={handleCreate} value={input.age} />
                    </div>

                    <div class="inputContainer">
                        <TbBrandSamsungpass />
                        <input type="text" class="inputField" id="department" placeholder="department" name='department' onChange={handleCreate} value={input.department} />
                    </div>

                    <div class="inputContainer">
                        <TbBrandSamsungpass />
                        <input type="text" class="inputField" id="password" placeholder="position" name='position' onChange={handleCreate} value={input.position} />
                    </div>

                    <button id="button" type='submit'>Submit</button>
                    <a class="forgotLink" href="#">Forgot your password?</a>
                </form>
            </div>


            {/* <Container>
                <Row>
                    {
                        viewData.map((data) => {
                            return (
                                <Card style={{ width: '18rem' }} className='ms-5'>
                                    <img src={StudentImg} alt="" className='img-fluid' />
                                    <Card.Body>
                                        <Card.Title className='fs-3 fw-bold'>{data.fname}</Card.Title>
                                        <p className='fs-5 fw-bold'>{data.email}</p>
                                        <p className='fs-5 fw-bold'>{data.password}</p>
                                        <button className='btn btn-success'>Edit</button>
                                        <button className='btn btn-danger ms-2'>Delete</button>


                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>
            </Container> */}


        </>
    )
}

export default CreateForm
