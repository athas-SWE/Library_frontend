import "./departments-grid.scss";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models";
import moment from "moment";
import React from "react";
import { IDepartment } from "../../types/global.typing";
import { useNavigate } from "react-router-dom";

interface IDepartmentsGridProps {
  data: IDepartment[];
}

const DepartmentsGrid = ({ data }: IDepartmentsGridProps) => {
  const navigate = useNavigate();

  const handleUpdate = (id: number) => {
    // Navigate to the update page with the department ID
    navigate(`/department/update/${id}`);
  };

  const handleDelete = (id: number) => {
    // Navigate to the delete page with the department ID
    navigate(`/department/delete/${id}`);
  };
  const column: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "code", headerName: "Code", width: 150 },
    {
      field: "createdAt",
      headerName: "Creation Time",
      width: 200,
      renderCell: (params) => moment(params.row.createdAt).format("YYYY-MM-DD"),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: function CustomActionsCell(params) {
        return (
          <div>
            <button onClick={() => handleUpdate(params.row.id)}>Update</button>
            <button onClick={() => handleDelete(params.row.id)}>Delete</button>
          </div>
        );
      },
    },
  ];

  return (
    <Box sx={{ width: "100%", height: 450 }} className="departments-grid">
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.id}
        rowHeight={50}
      />
    </Box>
  );
};

export default DepartmentsGrid;
