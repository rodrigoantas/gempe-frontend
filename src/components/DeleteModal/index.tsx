import React, {useState, useEffect, useCallback} from 'react'

import ReactModal from 'react-modal';
import { useCell } from '../../contexts/CellContext';
import api from '../../services/api';

import {Content, CancelDiv} from './styles'
import cancel from '../../assets/cancel.png'


interface IModalProps {
  setIsOpen: () => void;
  isOpen: boolean;
}

const DeleteModal: React.FC<IModalProps> = ({isOpen, setIsOpen}) => {

  const {cell} = useCell()

  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  const handleDelete = useCallback(async()=> {
    await api.delete(`/people/${cell.id}`)
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
            justifyContent: 'center'
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >

      <CancelDiv>
        <img src={cancel} alt="cancel" onClick={setIsOpen}/>
      </CancelDiv>
      <Content>
      <p>Deseja excluir o contato <span>{cell.name}</span>?</p>
        <div>
          <button onClick={setIsOpen}>Não</button>
          <button onClick={(e) => {
            e.preventDefault()
            handleDelete();
            }}>Sim</button>
        </div>
      </Content>
      </ReactModal>
  )
}

export default DeleteModal