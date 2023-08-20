import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Header from '../../components/Header';
import "./styles.css"
import {color} from "../../common/styles"

function Home() {
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
    <div className="app">
      <Header></Header>
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
            <Button variant="contained" style={color.backgroundBrandColor} onClick={() => handleRemoveField(index)}>
              Remover
            </Button>
          </div>
        ))}
        <div className="add-button-container">
          <Button variant="contained" style={color.backgroundBrandColor} onClick={handleAddField}>
            Adicionar despesa
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
