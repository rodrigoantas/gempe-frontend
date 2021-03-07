import React, { useCallback, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

import { Button } from './styles';

import editicon from '../../assets/edit-icon.svg'
import trashicon from '../../assets/trash-icon.svg'

import api from "../../services/api";

import EditModal from "../EditModal";
import DeleteModal from "../DeleteModal";

import { useCell } from "../../contexts/CellContext";

interface IPeople {
  id: string;
  name: string;
  phone: string;
  email: string;
}

interface IDataTableProps {
  search: any;
  toggleNewContactModal(): any;
}

const DataTable: React.FC<IDataTableProps> = ({search, toggleNewContactModal}) => {
  

  const {setCell} = useCell()



  //edit modal settings
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const toggleEditModal = useCallback((): void => {
    setEditModalIsOpen(!editModalIsOpen);
  }, [editModalIsOpen]);

  //delet modal settings

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  const toggleDeleteModal = useCallback((): void => {
    setDeleteModalIsOpen(!deleteModalIsOpen);
  }, [deleteModalIsOpen]);

  // setting the data, and settings of the columns
  const [people, setPeople] = useState<IPeople[]>([])

  
useEffect(()=> {
  async function loadPeople(){
    const {data} = await api.get('/people', {
      params: {
        q: search
      }
    })
    setPeople(data)
  }
  loadPeople()
 
}, [search, toggleEditModal, toggleNewContactModal, toggleDeleteModal])

  
  const columns = [
    { field: "name", headerName: "Nome", flex: 2, },
    { field: "email", headerName: "E-mail", flex: 2, },
    { field: "phone", headerName: "Telefone", flex: 2, },
    {
      field: "actions",
      headerName: "Ações",
      flex: 2,
      renderCell: (params: any) => (
        <>
        <Button onClick={()=> {
          toggleEditModal()
          setCell(params.row)
          }}>
          <img src={editicon} alt="Edit Button"/>
        </Button>

        <Button
        onClick={()=> {
          toggleDeleteModal()
          setCell(params.row)
        }}
        >
          <img src={trashicon} alt="Trash Button"/>
        </Button>
        </>
      ) 
    }
  ];





  return (
    <>
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid  autoHeight={true} rows={people} columns={columns} pageSize={9} disableSelectionOnClick={true} disableColumnMenu disableColumnSelector disableColumnReorder />
    </div>
    <EditModal
    setIsOpen={toggleEditModal}
    isOpen={editModalIsOpen} 
    />
    <DeleteModal
    setIsOpen={toggleDeleteModal}
    isOpen={deleteModalIsOpen}
    />
    </>
  );
}


export default DataTable