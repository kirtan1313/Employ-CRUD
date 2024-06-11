import CreateForm from './Componets/CreateForm/CreateForm';
import { Route, Routes } from 'react-router-dom';
import ViewData from './Componets/ViewData/ViewData.jsx'
import Header from './Componets/Header/Header.jsx';
import EditForm from './Componets/EditForm/EditForm.jsx'



function App() {

  


  return (
    <>

      <Header />

      <Routes>

        <Route path='/' element={<ViewData />} />
        <Route path='/createform' element={<CreateForm />} />
        <Route path='/edit/:id' element={<EditForm />} />

      </Routes>
    </>
  )
}

export default App;
