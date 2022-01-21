import {
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  addDoc,
  collection,
} from "firebase/firestore";
import { firestore } from "../database/firebaseConfig";

const databaseCollectionRef = collection(firestore, "books");

class BookService{
    
    AddBook =(newbook)=> {
        return addDoc(databaseCollectionRef, newbook)

    }

    UpdateBook =(id, updatedBook)=>{
        const bookDoc = doc(firestore, "books",id)
        return updateDoc(bookDoc,updatedBook)

    }
    DeleteBook=(id)=>{
        const bookDoc = doc(firestore, "books",id);
        return deleteDoc(bookDoc);

    }
    getBook =(id)=>{
        const bookDoc = doc(firestore, "books",id);
        return getDoc(bookDoc);
     }

     getAllBooks=()=>{
         
         return getDocs(databaseCollectionRef);
     }
}

export default new BookService();
