import React, { createContext, useState, useContext } from 'react';

interface ICell {
  id: string;
  name: string;
  phone: string;
  email: string;
}

interface CellContextData {
  cell: ICell
  setCell: React.Dispatch<React.SetStateAction<ICell>>
}


const CellContext = createContext<CellContextData>({} as CellContextData);

const CellProvider : React.FC = ({ children }) => {
  

  const [cell, setCell] = useState({} as ICell)
  

  return (
    <CellContext.Provider
      value={{ cell, setCell }}
    >
      {children}
    </CellContext.Provider>
  );
};

function useCell(): CellContextData {
  const context = useContext(CellContext);
  if (!context) {
    throw new Error('useCell must be used within an CellProvider');
  }

  return context;
}

export { CellProvider , useCell };
