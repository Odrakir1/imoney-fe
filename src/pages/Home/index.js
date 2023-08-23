import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./styles.css"
import { color } from "../../common/styles"

function Home() {
  const [fields, setFields] = useState([{ label: "", value: "" }]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const handleAddField = () => {
    const newField = { label: "", value: "" };
    setFields([...fields, newField]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleFieldChange = (index, fieldKey, fieldValue) => {
    const updatedFields = [...fields];
    if (fieldKey === "value") {
      fieldValue = fieldValue.replace(/[^\d]/g, "");
      fieldValue = (parseFloat(fieldValue) / 100).toFixed(2);
    }
    updatedFields[index][fieldKey] = fieldValue;
    setFields(updatedFields);
  };

  const formatCurrency = (value) => {
    return parseFloat(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const recalculateTotalExpenses = () => {
    const total = fields
      .reduce((acc, field) => acc + parseFloat(field.value || 0), 0);
    setTotalExpenses(total);
  };

  return (
    <div className="app">
      <div className="fields-container">
        {fields.map((field, index) => (
          <div key={index} className="field">
            <TextField
              label="Despesa"
              variant="outlined"
              size="small"
              style={{ marginRight: "10px" }}
              value={field.label}
              onChange={(e) => handleFieldChange(index, "label", e.target.value)}
            />
            <TextField
              label="R$"
              variant="outlined"
              size="small"
              style={{ marginRight: "10px" }}
              value={formatCurrency(field.value || 0)}
              onChange={(e) => handleFieldChange(index, "value", e.target.value)}
              onBlur={(e) => handleFieldChange(index, "value", e.target.value)}
            />
            <Button variant="contained" style={color.backgroundBrandColor} onClick={() => handleRemoveField(index)}>
              Remover
            </Button>
          </div>
        ))}
        <Box display="flex" justifyContent="space-between"
          alignItems="center" flexDirection="row" gap={16}>
          <div className="add-button-container">
            <Button variant="contained" style={color.backgroundBrandColor} onClick={handleAddField}>
              Adicionar despesa
            </Button>
          </div>
          <div className="add-button-container">
            <Button variant="contained" style={color.backgroundBrandColor} onClick={recalculateTotalExpenses}>
              Calcular despesas
            </Button>
          </div>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={5}>
            <p>Total despesas: {formatCurrency(totalExpenses)}</p>
        </Box>
      </div>
    </div>
  );
}

export default Home;
