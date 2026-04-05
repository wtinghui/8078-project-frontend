import { Link } from 'wouter';

export default function BookThumbnail(props) {
    return (
        <div name="bookThumbnail" className="border p-2" key={props.bookId}>
            <h4 className="mt-2">
                <Link to={`/books/${props.bookId}`} className="text-decoration-none">
                    {props.bookTitle}
                </Link>
            </h4>
            <div>
                by: {props.authors}
            </div>
            <div>
                Ratings:
                {props.avgRatings ? props.avgRatings + "/5 (" + props.noOfRatings + ")" : "No ratings"}
            </div>
            <div className="d-flex">
                {props.genres.split(",").map((genre) => {
                    return (
                        <div className="badge text-bg-primary me-2 my-2">
                            {genre}
                        </div>
                    )

                })}
            </div>


        </div >
    )

}