import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import AuthForm from "./auth";

const Button = styled.button`
  background-color: #F8F8F8; 
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
`;

const ModalContent = styled.div`
  background-color: #FFF;
  padding: 20px;
  border-radius: 10px;
`;

function AuthModal(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Button onClick={handleOpen}>Войти</Button>
            <Modal isOpen={isOpen} onRequestClose={handleClose} contentLabel="Авторизация">
                <ModalContent>
                    <AuthForm onClose={handleClose} />
                </ModalContent>
            </Modal>
        </>
    );
}

export default AuthModal;
