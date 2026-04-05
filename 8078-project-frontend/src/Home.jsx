import axios from "axios"
import {useState, useEffect} from "react";
import BookThumbnail from "./BookThumbnail"


export default function Home(){
    
    const [books, setBooks]=useState([]);

    useEffect(()=>{
        const fetchBooks = async ()=> {
            const response = await axios.get(import.meta.env.VITE_API_URL + "/books");
            setBooks(response.data.books);
            console.log(response.data.books)
        };
        fetchBooks();
    },[]);



    return(
        <div className="container">
            {books.map(b=>(
                <BookThumbnail 
                    bookId={b.book_id}
                    bookTitle={b.book_title}
                    authors={b.authors}
                    avgRatings={b.avg_ratings}
                    noOfRatings={b.no_of_ratings}
                    genres={b.genres}
                    />
            ))}

        </div>
    )
}