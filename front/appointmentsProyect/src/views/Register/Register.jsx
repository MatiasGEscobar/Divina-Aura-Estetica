import React from "react";
import axios from "axios";
import {Formik, Form, Field, ErrorMessage} from "formik";
import { validateRegister } from "../../helpers/validator";

const Register = () => {
    const handleSubmit = async(formData) => {
       try {
        const response = await axios.post("http://localhost:3000/users/register", formData);
        if(response.status === 201) {   
            alert("Registro exitoso");
        } else {
            alert("Error al enviar el registro");
        }
       } catch (error) {
        alert ("Error al enviar el registro");
       }
    }

    return (
        <div>
            <h2>REGISTRO DE USUARIOS</h2>
        <Formik
            initialValues={{
                name: "",
                email: "",
                birthDate: "",
                nDni: "",
                username: "",
                password: "",
            }}
            validate={ validateRegister }
            onSubmit={(values, { setSubmitting, resetForm}) => {
                handleSubmit(values);
                setSubmitting(false);
                resetForm();
            }}>

{({ isSubmitting, errors }) => (
                <Form>
                    
                    <label>Name</label>
                    <Field type="text" name="name" placeholder="Name" />
                    <ErrorMessage name="name" component="div" />

                    <label>Email</label>
                    <Field type="email" name="email" placeholder="abcd@mail.com" />
                    <ErrorMessage name="email" component="div" />

                    <label>Birth Date</label>
                    <Field type="date" name="birthDate" />
                    <ErrorMessage name="birthDate" component="div" />

                    <label>N° Dni</label>
                    <Field type="number" name="nDni" placeholder="12345678" />
                    <ErrorMessage name="nDni" component="div" />

                    <label>Username</label>
                    <Field type="text" name="username" placeholder="Username" />
                    <ErrorMessage name="username" component="div" />

                    <label>Password</label>
                    <Field type="password" name="password" placeholder="*******" />
                    <ErrorMessage name="password" component="div" />

                    <button disabled={isSubmitting || errors.name || errors.email || errors.birthDate || errors.nDni || errors.username || errors.password} type="submit">
                        Submit
                    </button>
                </Form>
)}
            </Formik>
            </div>
    );
}

export default Register;

   