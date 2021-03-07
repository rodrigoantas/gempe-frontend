import React, { useCallback, useState } from 'react';

import Header from '../../components/Header'
import Menu from '../../components/Menu'
import SearchBar from '../../components/SearchBar'
import DataTable from '../../components/DataTable'
import { Content, DashboardContainer, PageBox, SearchContent, DataContent } from './styles';
import NewContactModal from '../../components/NewContactModal';


const Dashboard: React.FC = () => {
  const [newContactModalIsOpen, setNewContactModalIsOpen] = useState(false);

  const toggleNewContactModal = useCallback((): void => {
    setNewContactModalIsOpen(!newContactModalIsOpen);
  }, [newContactModalIsOpen]);

  const [search, setSearch] = useState('')

  return (
    <>
    <DashboardContainer>
      <Menu isOnPage={'dashboard'}/>
      <PageBox>
        <Header/>
        <Content>
          <SearchContent>
            <SearchBar setSearch={setSearch}/>
            <button onClick={toggleNewContactModal}>Novo</button>
          </SearchContent>
          <DataContent>
            <DataTable toggleNewContactModal={toggleNewContactModal}search={search}/>
          </DataContent>
        </Content>
      </PageBox>
        
    </DashboardContainer>

    <NewContactModal
    setIsOpen={toggleNewContactModal}
    isOpen={newContactModalIsOpen}
    />
    
    </>
  )
}

export default Dashboard