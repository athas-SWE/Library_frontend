import React from "react";
import { IDepartment } from "../../types/global.typing";
import "./departments.scss";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../constants/url.constants";

const UpdateDepartment: React.FC = () => {
  const [department, setDepartment] = React.useState<Partial<IDepartment>>({
    name: "",
    code: "",
  });

  const redirect = useNavigate();
  const { id } = useParams();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartment({
      ...department,
      [event.target.name]: event.target.value,
    });
  };

  React.useEffect(() => {
    axios.get<IDepartment>(`${baseUrl}/${id}`).then((response) =>
      setDepartment({
        name: response.data.name,
        code: response.data.code,
      })
    );
  });

  const handleSaveBtnClick = () => {
    if (department.name === "" || department.code === "") {
      alert("Enter Values");
      return;
    }
    const data: Partial<IDepartment> = {
      code: department.code,
      name: department.name,
    };
    axios
      .put(`${baseUrl}/${id}`, data)
      .then((resposne) =>
        redirect("/departments", {
          state: { message: " Updated Successfully" },
        })
      )
      .catch((error) => alert("Error"));
  };

  const handleBackBtnClick = () => {
    redirect("/departments");
  };

  return (
    <div className="updatedepartment">
      <h2>Update Department</h2>
      <TextField
        autoComplete="off"
        label="Code"
        variant="outlined"
        name="code"
        value={department.code}
        onChange={changeHandler}
      />
      <TextField
        autoComplete="off"
        label="Name"
        variant="outlined"
        name="name"
        value={department.name}
        onChange={changeHandler}
      />
      <div>
        <Button variant="outlined" color="primary" onClick={handleSaveBtnClick}>
          Save
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

export default UpdateDepartment;
