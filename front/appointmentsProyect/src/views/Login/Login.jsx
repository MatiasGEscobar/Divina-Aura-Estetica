import React from "react";
import axios from "axios";
import {Formik, Form, Field, ErrorMessage} from "formik";
import { validateLogin } from "../../helpers/validator";

const Login = () => {
    
    const handleSubmit = async(formData) => {
       try {
        const response = await axios.post("http://localhost:3000/users/login", formData);
        if(response.status === 200) {   
            alert("Login exitoso");
        } else {
            alert("Error al realizar el login");
        }
       } catch (error) {
        alert ("Error al realizar el login");
       }
    }

    return (
        <div>
            <h2>LOGIN DE USUARIOS</h2>
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            validate={ validateLogin }
            onSubmit={(values, { setSubmitting, resetForm}) => {
                handleSubmit(values);
                setSubmitting(false);
                resetForm();
            }}>

{({ isSubmitting, errors }) => (
                <Form>
                    <label>Username</label>
                    <Field type="text" name="username" placeholder="Username" />
                    <ErrorMessage name="username" component="div" />

                    <label>Password</label>
                    <Field type="password" name="password" placeholder="*******" />
                    <ErrorMessage name="password" component="div" />

                    <button disabled={isSubmitting || errors.username || errors.password} type="submit">
                        Submit
                    </button>
                </Form>
)}
            </Formik>
            </div>
    );
}

export default Login;

   