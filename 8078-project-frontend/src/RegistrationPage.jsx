import { Formik, Form, Field } from 'formik';
import { useLocation } from 'wouter';
import axios from 'axios';


export default function RegistrationPage() {
    const [, setLocation] = useLocation();

    const initialValues = {
        "username": "",
        "email": "",
        "password": "",
        "passwordConfirmation": "",
        "dateOfBirth": ""
    };

    const handleSubmit = async (values, formikHelpers) => {
        try {
            if (values.password == values.passwordConfirmation) {
                console.log(values)
                const response = await axios.post(import.meta.env.VITE_API_URL + "/users/register", values);
                alert("Your account is registered.");
                setLocation("/login");

            } else {
                alert ("Password entered does not match")
            }

        } catch (e) {
            alert(e);
        }

    }
    return (
        <div className="container my-3">
            <h3> Register an account</h3>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}>
                {function (formik) {
                    return (
                        <Form>
                            <div className="mb-3">
                                <label>Username</label>
                                <Field type="text" name="username" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>Email</label>
                                <Field type="email" name="email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <Field type="password" name="password" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>Confirm Password</label>
                                <Field type="password" name="passwordConfirmation" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>Date of Birth</label>
                                <Field type="date" name="dateOfBirth" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary mb-3" disabled={formik.isSubmitting}>
                                Register
                            </button>
                        </Form>
                    )

                }}
            </Formik>

        </div>
    )
}