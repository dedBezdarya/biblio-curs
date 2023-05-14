import {Formik, Form, Field, ErrorMessage} from 'formik';
import React from 'react';
import {useState} from "react";

function AuthForm({onClose}) {
    const [isAuthed, setIsAuthed] = useState(false);

    const handleSubmit = async (email, password, login) => {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (response.ok) {
            setIsAuthed(true);
            console.log('nice')
        } else {
            // handle registration error
        }
    };

    return (
        <Formik
            initialValues={{email: '', login: '', password: ''}}
            validate={(values) => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                }
                if (!values.login) {
                    errors.login = 'Required';
                }
                if (!values.password) {
                    errors.password = 'Required';
                }
                return errors;
            }}
            onSubmit={handleSubmit}
        >
            {({isSubmitting, values}) => (
                <Form>
                    {isAuthed && <div>Готово!</div>}
                    <div>
                        <label htmlFor="email">Почта: </label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="div"/>
                    </div>
                    <div>
                        <label htmlFor="password">Пароль: </label>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting} onClick={async () => {
                            isSubmitting = true
                            await handleSubmit(values.email, values.password)
                        }}>
                            Войти
                        </button>
                        <button type="button" onClick={onClose}>
                            Закрыть
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default AuthForm;
