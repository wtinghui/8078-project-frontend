import { useState, useEffect } from 'react';
import { useJWT } from './UserStore';
import axios from 'axios';
import { useLocation } from 'wouter';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function UserProfile() {
    const { getJWT, clearJWT } = useJWT();
    const [, setLocation] = useLocation();
    const [initialValues, setInitialValues] = useState({
        username: "",
        email: "",
        dateOfBirth: ""
    })
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        const token = getJWT();

        if (!token) {
            alert("Please login.");
            setLocation("/login")
        } else {
            const fetchUserDetails = async () => {
                const response = await axios.get(import.meta.env.VITE_API_URL + "/users/me", {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });
                console.log(response.data);
                setInitialValues({ ...response.data.userDetails, dateOfBirth: response.data.userDetails.date_of_birth.split("T")[0] });
            }
            fetchUserDetails();
        }
    }, [])

    const handleSaveChanges = async (values, actions) => {
        try {
            const token = getJWT();
            console.log(values)
            await axios.put(import.meta.env.VITE_API_URL + "/users/me", values, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            setIsEditMode(false);
        } catch (e) {
            console.log(e)
        }
    };

    const handleDeleteAccount = async () =>{
        const token = getJWT();
        await axios.delete(import.meta.env.VITE_API_URL + "/users/me", {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        clearJWT();
        setLocation("/");
        
    }

    return (
        <div className="container my-3">
            <div className="d-flex justify-content-between">
                <h3 className="my-2"> Profile Page</h3>
                <div>
                    <button type="button" className="btn btn-primary me-2" onClick={() => { setIsEditMode(true) }}>
                        Edit
                    </button>
                    <button type="button" className="btn btn-danger me-2" onClick={handleDeleteAccount}>
                        Delete Account
                    </button>
                </div>

            </div>

            <Formik
                initialValues={initialValues}
                enableReinitialize
                onSubmit={handleSaveChanges}
            >
                {function (formik) {
                    return (
                        <Form>
                            <div className="mb-3">
                                <label>Username</label>
                                <Field type="text" name="username" className="form-control" disabled={!isEditMode} />
                            </div>
                            <div className="mb-3">
                                <label>Email</label>
                                <Field type="email" name="email" className="form-control" disabled={!isEditMode} />
                            </div>
                            <div className="mb-3">
                                <label>Date of Birth</label>
                                <Field type="date" name="dateOfBirth" className="form-control" disabled={!isEditMode} />
                            </div>
                            {isEditMode ?
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary me-2"
                                        disabled={formik.isSubmitting}
                                    >
                                        Save changes
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary me-2"
                                        disabled={formik.isSubmitting}
                                        onClick={() => {
                                            setIsEditMode(false)
                                        }}>
                                        Cancel
                                    </button>

                                </div>
                                :
                                ""}

                        </Form>
                    )
                }}
            </Formik>

        </div >
    )

};