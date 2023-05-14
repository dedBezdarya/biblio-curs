import {Formik, Form, Field, ErrorMessage} from 'formik';
import React from 'react';
import {useState} from "react";

function RegistrationForm({onClose}) {
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = async (email, password, login) => {
        const response = await fetch('http://localhost:3001/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                login: login,
                password: password
            })
        });

        if (response.ok) {
            setIsRegistered(true);
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
            {({isSubmitting,values}) => (
                <Form>
                    {isRegistered && <div>Готово!</div>}
                    <div>
                        <label htmlFor="email">Почта: </label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="div"/>
                    </div>
                    <div>
                        <label htmlFor="login">Логин: </label>
                        <Field type="text" name="login"/>
                        <ErrorMessage name="login" component="div"/>
                    </div>
                    <div>
                        <label htmlFor="password">Пароль: </label>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting} onClick={async () => {
                            isSubmitting = true
                            await handleSubmit(values.email, values.login, values.password)
                        }}>
                            Зарегистрироваться
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

export default RegistrationForm;
