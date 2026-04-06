import { useEffect } from 'react';
import {useLocation} from 'wouter';
import {useJWT} from './UserStore'



export default function BookReview(props) {
    const {getJWT} = useJWT();
    const [,setLocation] = useLocation();

    useEffect(()=>{
        const token = getJWT();

        if(!token){
            alert("Please login to write a review.");
            Securi
        }
    },[]);

    return (
        <div className="container my-3">
            <h3>Write a Book Review</h3>

        </div>
    )

}