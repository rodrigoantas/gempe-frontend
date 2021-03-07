import React, { useCallback, useState } from 'react';

import {InputContainer} from './styles'

import {BsSearch} from 'react-icons/bs'

interface SearchBarProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({setSearch}) => {

  const [searchValue, setSearchValue] = useState('')

  const handleSearch = useCallback((e)=> {
    e.preventDefault();
    setSearch(searchValue)
   
    
  },[searchValue, setSearch])

  return (

    <InputContainer>
      <form onSubmit={(e)=> handleSearch(e)}>
        <BsSearch opacity={0.4}/>
        <input  onChange={(e) => { e.preventDefault(); setSearchValue(e.target.value);}} placeholder="Busca por nome ou e-mail"/>
      </form>
    </InputContainer>

  )

}

export default SearchBar;