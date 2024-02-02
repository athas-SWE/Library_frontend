import React from "react";
import "./departments.scss";

import { IDepartment } from "../../types/global.typing";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../constants/url.constants";

const DeleteDepartment = () => {
  const redirect = useNavigate();
  const { id } = useParams();

  const handleDeleteBtnClick = () => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((resposne) =>
        redirect("/departments", {
          state: { message: "Department Deleted Successfully" },
        })
      )
      .catch((error) => alert("Error"));
  };

  const handleBackBtnClick = () => {
    redirect("/departments");
  };

  return (
    <div className="deletedepartment">
      <h2>Delete Department</h2>
      <h4>Are You Sure You want to delete this Department?</h4>

      <div>
        <Button variant="outlined" color="error" onClick={handleDeleteBtnClick}>
          Yes Delete It
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBackBtnClick}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default DeleteDepartment;
