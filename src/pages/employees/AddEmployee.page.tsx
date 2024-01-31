import { useState, useEffect } from "react";
import "./employees.scss";
import {
  IDepartment,
  ICreateEmployeeDto,
  ICreateDepartmentDto,
  ICreateJobDto,
  IJob,
} from "../../types/global.typing";

import TextField from "@mui/material/TextField/TextField";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Button from "@mui/material/Button/Button";
import { useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";
import Employees from "./Employees.page";

const AddEmployee = () => {
  const [employee, setEmployee] = useState<ICreateEmployeeDto>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateofBirth: "",
    salary: "", // Fix: Use "salary" instead of "phone" here
    department: "", // Fix: Use "department" instead of "phone" here
    jobId: "",
  });

  // ...

  const handleClickSaveBtn = () => {
    if (
      employee.firstName === "" ||
      employee.lastName === "" ||
      employee.email === "" ||
      employee.phone === "" ||
      employee.dateOfBirth === "" ||
      employee.salary === "" ||
      employee.department === "" ||
      employee.jobId === ""
    ) {
      alert("Fill all fields");
      return;
    }

    const newEmployeeFormData = new FormData();
    newEmployeeFormData.append("firstName", employee.firstName);
    newEmployeeFormData.append("lastName", employee.lastName);
    newEmployeeFormData.append("email", employee.email);
    newEmployeeFormData.append("phone", employee.phone);
    newEmployeeFormData.append("dateOfBirth", employee.dateOfBirth);
    newEmployeeFormData.append("salary", String(employee.salary));
    newEmployeeFormData.append("department", employee.department);
    newEmployeeFormData.append("jobId", employee.jobId);

    httpModule
      .post("/Employee/Create", newEmployeeFormData)
      .then((response) => navigate("/employees"))
      .catch((error) => console.log(error));
  };

  const handleClickBackBtn = () => {
    redirect("/employees");
  };

  return (
    <div className="content">
      <div className="add-employee">
        <h2>Add New Employee</h2>
        <FormControl fullWidth>
          <InputLabel>Job</InputLabel>
          <Select
            value={employee.jobId}
            label="Job"
            onChange={(e) =>
              setEmployee({ ...employee, jobId: e.target.value })
            }
          >
            {jobs.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          autoComplete="off"
          label="First Name"
          variant="outlined"
          value={employee.firstName}
          onChange={(e) =>
            setEmployee({ ...employee, firstName: e.target.value })
          }
        />
        <TextField
          autoComplete="off"
          label="Last Name"
          variant="outlined"
          value={employee.lastName}
          onChange={(e) =>
            setEmployee({ ...employee, lastName: e.target.value })
          }
        />
        <TextField
          autoComplete="off"
          label="Email"
          variant="outlined"
          value={employee.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
        />
        <TextField
          autoComplete="off"
          label="Phone"
          variant="outlined"
          value={employee.phone}
          onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
        />
        <TextField
          autoComplete="off"
          label="DateOfBirth"
          variant="outlined"
          value={employee.dateofBirth}
          onChange={(e) =>
            setEmployee({ ...employee, dateofBirth: e.target.value })
          }
        />
        <TextField
          autoComplete="off"
          label="Salary"
          variant="outlined"
          value={employee.salary}
          onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
        />
        <TextField
          autoComplete="off"
          label="Phone"
          variant="outlined"
          value={employee.department}
          onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
        />

        <div className="btns">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickSaveBtn}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClickBackBtn}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
