import { ButtonGroup } from '@material-ui/core';
import { Alert, Button } from 'react-bootstrap';
import React from 'react';
import { InputGroup,Form } from 'react-bootstrap';
import { useState } from 'react';
import bookService from '../../service/book.service';






const AddBook = () => {

const [book, setBook] = useState("");
const [author, setAuthor] = useState("");
const [status, setStatus] = useState("");
const [error, setError] = useState({err:false, msg:""});

 const handleSubmit= async(e)=>{
   e.preventDefault();

   if(book === "" || author === "" || status===""){

      setError({err:true, msg:"All field are required"});
      return;
   }

   try {
       await bookService.AddBook({book, author,status});
       setError({ error: false, msg: "New Book added successfully!" });
       setBook("");
       setAuthor("")
       setStatus("")
      
   } catch (err) {
    setError({ error: true, msg: err.message });
     
   }

 }


  return <>
  <div className="p-4 box">
    {
      error?.msg && <Alert variant={error?.err ? "danger": "success"}  dismissible
      onClose={() => setError("")}>{error?.msg}</Alert>
    }
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">Book</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Title" 
                value={book}   
                onChange={(e) => setBook(e.target.value)}
              />
            </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle">Author</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Book Author"   
                value={author}   
                onChange={(e) => setAuthor(e.target.value)} 
              />
            </InputGroup>
        </Form.Group>
          
          <ButtonGroup className='mb-3'>
              <Button variant='primary' onClick={
                () =>setStatus("Availble")
              }>Available</Button>
              <Button variant='danger' onClick={
                () =>setStatus("Unavailable")
              }>Unavailable</Button>
          </ButtonGroup> <br />
          <Button variant='success' type='submit'>Add /Update</Button>
      </Form>
  </div>

  </>
};

export default AddBook;
