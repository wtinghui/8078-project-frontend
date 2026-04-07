import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useJWT } from './UserStore';
import {Formik, Form, Field} from 'formik';



export default function BookReview(props) {
    const { getJWT } = useJWT();
    const [, setLocation] = useLocation();

    useEffect(() => {
        const token = getJWT();
        console.log(token);

        if (!token) {
            alert("Please login to write a review.");
            setLocation("/login");
        }
    }, []);

    return (
        <div className="container my-3">
            <h3>Write a Book Review</h3>
            <Formik>
                {function (formik) {
                    return (
                        <Form>
                            <div className="mb-3">
                                <label>Title: </label>
                                <Field type="text" name="bookTitle" className="form-control" disabled={true} />
                            </div>
                            <div className="mb-3">
                                <label>Authors: </label>
                                <Field type="text" name="authors" className="form-control" disabled={true} />
                            </div>

                        </Form>
                    )
                }}
            </Formik>

        </div>
    )

}