import React, { useEffect, useState} from 'react';
import { Table,Button } from 'react-bootstrap'
import bookService from '../../service/book.service';

const BookList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
       retrieveBooks()
  },[])
  const retrieveBooks = async()=>{

     const data  = await bookService.getAllBooks()
     setBooks(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    
  }

  console.log(books)

  return <>
         <div></div>
         <Table>
             <tbody>
                 <tr>
                 <th>#</th>
                  <th>Book Title</th>
                  <th>Book Author</th>
                  <th>Status</th>
                  <th>Action</th>
                 </tr>
             </tbody>

             <tbody>
             {
               books.map((book, index) => {
                 return  <tr key={book.id}>
                   <td>{index+1}</td>
                   <td>{book.book}</td>
                   <td>{book.author}</td>
                   <td>{book.status}</td>
                   <td ><Button
                    variant="secondary"
                    className="edit"
                    style={{
                     padding:"10 25px ",
                     margin:10
                   }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    
                  >
                    Delete
                  </Button></td>
                </tr>
               })
             }
               
             </tbody>
         </Table>
  </>  
};

export default BookList;
