import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function App() {
  const [fields, setFields] = useState([{ label: '', value: '' }]);

  const handleAddField = () => {
    const newField = { label: '', value: '' };
    setFields([...fields, newField]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleFieldChange = (index, fieldKey, fieldValue) => {
    const updatedFields = [...fields];
    if (fieldKey === 'value') {
      fieldValue = fieldValue.replace(/[^\d]/g, '');
      fieldValue = (parseFloat(fieldValue) / 100).toFixed(2);
    }
    updatedFields[index][fieldKey] = fieldValue;
    setFields(updatedFields);
  };

  const formatCurrency = (value) => {
    return parseFloat(value).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <div className="App">
      <AppBar position="static" style={{ background: "#002366" }}>
      <Toolbar>
        {/* <img src="/logo.png" alt="Logo" className="logo" style={{ width: '150px', height: 'auto' }} /> */}

        <h3 style={{textTransform: "uppercase"}}>
          iMoney
        </h3>
        <nav style={{ width: "100%" }}>
          <ul className="navigation" style={{ listStyleType: 'none', display: 'flex', justifyContent: 'end', alignItems: 'center', margin: 0, padding: 0 }}>
            <li>
              <a href="#" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Home</a>
            </li>
            <li>
              <a href="#" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Meu Perfil</a>
            </li>
            <li>
              <a href="#" style={{ color: 'white', textDecoration: 'none', padding: '10px' }}>Relatório</a>
            </li>
          </ul>
        </nav>
        <Button variant="outlined" color="inherit" endIcon={<ExitToAppIcon />} style={{ color: 'white', borderColor: 'white' }}>
          Sair
        </Button>
      </Toolbar>
    </AppBar>
      <div className="fields-container">
      {fields.map((field, index) => (
          <div key={index} className="field">
            <TextField
              label="Despesa"
              variant="outlined"
              size="small"
              style={{ marginRight: '10px' }}
              value={field.label}
              onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
            />
            <TextField
              label="R$"
              variant="outlined"
              size="small"
              style={{ marginRight: '10px' }}
              value={formatCurrency(field.value || 0)}
              onChange={(e) => handleFieldChange(index, 'value', e.target.value)}
              onBlur={(e) => handleFieldChange(index, 'value', e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={() => handleRemoveField(index)}>
              Remover
            </Button>
          </div>
        ))}
        <div className="add-button-container">
          <Button variant="contained" color="primary" onClick={handleAddField}>
            Adicionar despesa
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
