import "./jobs-grid.scss";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid/models";
import moment from "moment";
import React from "react";
import { IJob } from "../../types/global.typing";
import { useNavigate } from "react-router-dom";

interface IJobsGridProps {
  data: IJob[];
}

const JobsGrid = ({ data }: IJobsGridProps) => {
  const navigate = useNavigate();

  const handleUpdate = (id: number) => {
    // Navigate to the update page with the department ID
    navigate(`/update/${id}`);
  };

  const handleDelete = (id: number) => {
    // Navigate to the delete page with the department ID
    navigate(`/delete/${id}`);
  };

  const column: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 500 },
    { field: "level", headerName: "Level", width: 150 },
    // { field: "companyName", headerName: "Company Name", width: 150 },
    {
      field: "createdAt",
      headerName: "Creation Time",
      width: 150,
      renderCell: (params) => moment(params.row.createdAt).fromNow(),
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
    <Box sx={{ width: "100%", height: 450 }} className="jobs-grid">
      <DataGrid
        rows={data}
        columns={column}
        getRowId={(row) => row.id}
        rowHeight={50}
      />
    </Box>
  );
};

export default JobsGrid;
