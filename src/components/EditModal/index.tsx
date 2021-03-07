import React, {useState, useEffect, useCallback} from 'react'
import { useForm } from 'react-hook-form';

import ReactModal from 'react-modal';
import { useCell } from '../../contexts/CellContext';
import api from '../../services/api';

import {Button, Form, TitleSection} from './styles'

import cancel from '../../assets/cancel.png'

interface IModalProps {
  setIsOpen: () => void;
  isOpen: boolean;
}

const EditModal: React.FC<IModalProps> = ({isOpen, setIsOpen}) => {

  const {cell} = useCell()
  const {register, handleSubmit} = useForm()

  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  const handleEditForm = useCallback(async(contact)=> {
    await api.put(`people/${cell.id}`, {
        name: contact.name,
        phone: contact.phone,
        email: contact.email
      })
      setIsOpen();
  }, [cell.id, setIsOpen])



  return (
    <ReactModal
        shouldCloseOnOverlayClick
        ariaHideApp={false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '500px',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px'
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      > 
        <TitleSection>
        <p>Editar contato</p>
        <img src={cancel} alt="cancel" onClick={setIsOpen}/>
        </TitleSection>
        <Form onSubmit={handleSubmit(handleEditForm)}>
          <label htmlFor="name">Nome</label>
          <input
          ref={register} 
          id="name" 
          name="name"
          placeholder="Digite o nome"
          defaultValue={cell.name}
          />

          <label htmlFor="email">E-mail</label>
          <input
          ref={register} 
          id="email" 
          name="email"
          placeholder="Digite o e-mail"
          defaultValue={cell.email}
          />

          <label htmlFor="phone">Telefone</label>
          <input
          ref={register} 
          id="phone" 
          name="phone"
          placeholder="Digite o telefone"
          defaultValue={cell.phone}
          />

        <Button>Criar</Button>
        </Form>
      </ReactModal>
  )
}

export default EditModal