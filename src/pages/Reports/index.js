import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import "./styles.css"

const data = [
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 200 },
    { name: "D", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p className="label">{`${data.name} : ${data.value}`}</p>
        </div>
      );
    }
    return null;
  };

function Reports() {
    return (
        <>
            <Box display="flex" justifyContent="center"
                alignItems="center" flexDirection="row">

                <Typography mt={4} variant="h4">
                    Seu gráfico de gastos do mês
                </Typography>
            </Box>

            <Box display="flex" justifyContent="center"
                alignItems="center" flexDirection="row">

                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </Box>
        </>
    );
}

export default Reports;
