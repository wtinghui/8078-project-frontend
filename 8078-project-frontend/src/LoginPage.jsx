import axios from 'axios';
import { useLocation } from 'wouter';
import { useJWT } from './UserStore';
import {Formik, Form, Field, ErrorMessage, validateYupSchema} from 'formik';

export default function LoginPage() {
    const [, setLocation] = useLocation();
    const { setJWT } = useJWT();

    const initialValues = {
        "email":"",
        "password":""
    }

    const handleSubmit = async (values, formikHelpers)=>{
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + "/users/login", values);
            setJWT(response.data.token);
            setLocation("/")

        } catch(e){
            alert("Invalid credentials");
            console.log(e)
        }
        
    }

    return (
        <div className="container my-3">
            <h3> Login </h3>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                >
                {function (formik){
                    return (
                         <Form>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <Field type="email" name="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <Field type="password" name="password" className="form-control" />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button type="submit" className="btn btn-primary mb-3" disabled={formik.isSubmitting}>
                                        Login
                                    </button>
                                    <a href="/register">Register here</a>
                                </div>
                                
                            </Form>
                    )
                }}
            </Formik>
        </div>

    );



}