import React, { useState } from 'react';
import Modal from 'react-modal';
import RegistrationForm from "./registration";
function RegModal(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={handleOpen}>Регистрация</button>
            <Modal isOpen={isOpen} onRequestClose={handleClose}>
                <RegistrationForm onClose={handleClose}/>
            </Modal>
        </>
    );
}

export default RegModal