import axios from "axios"
import { useState, useEffect } from "react"
import {Link} from 'wouter'

export default function Book(props) {
    const [bookDetails, setBookDetails] = useState(null);
    const [bookReviews, setBookReviews] = useState([]);

    useEffect(() => {
        const fetchBookDetails = async () => {
            const response = await axios.get(import.meta.env.VITE_API_URL + "/books/" + props.id);
            console.log(response.data);
            setBookDetails(response.data.bookDetails);
            setBookReviews(response.data.bookReviews);
        };
        fetchBookDetails();
    }, []);

    return (
        <>
            {
                bookDetails ? (
                <div className="m-3">
                    <div className="row">
                        <div className="col-7">
                            <h3>
                                {bookDetails?.book_title}
                            </h3>
                        </div>
                        <div className="col d-flex justify-content-end me-2">
                            <button className="btn btn-primary my-2">
                                <Link to={`/books/${props.id}/create-review`} className="text-decoration-none text-white">Write
                                    a review</Link>
                            </button>
                        </div>
                    </div>

                    <div>by: {bookDetails?.authors}
                    </div>

                    <div className="d-flex">
                        {bookDetails?.genres.split(",").map((genre) => {
                            return (
                                <div className="badge text-bg-primary me-2 my-2">
                                    {genre}
                                </div>
                            )

                        })}
                    </div>
                    <p>
                        {bookDetails?.book_description}
                    </p>
                    <h4>All Reviews ({bookReviews ? bookReviews.length : 0})</h4>
                    {bookReviews?.map((review) => {
                        return (
                            <div className="my-3 p-3 border">
                                <div className="row">
                                    <div className="col">
                                        {review.username ? review.username : "Anonymous"}
                                    </div>
                                    <div className="col-9">
                                        {review.ratings} stars
                                    </div>
                                    <div className="col">
                                        <a className="me-2">Edit</a>
                                        <a className="me-2">Delete</a>
                                    </div>
                                </div>
                                <div>
                                    {review.reviews}
                                </div>
                                <div className="text-secondary mt-1">
                                    Last modified: {review.duration < 24 ? review.duration + "h ago" : Math.floor(review.duration / 24) + " day ago"}
                                </div>
                            </div>

                        )
                    })}

                </div>
                ) : (
                    <p>Loading, please wait</p>
                )
            }
        </>
    )
}