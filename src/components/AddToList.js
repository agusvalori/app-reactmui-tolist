import {
  Button,
  FormControl,
  FormLabel,  
  MenuItem,
  Modal,  
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Box } from "@mui/system";

import React, { useState } from "react";
import { addTask } from "../servicios/db";

export const AddToList = () => {
  const [openM, setOpenM] = useState(false);
  const initialValues = {
    title: "",
    description: "",
    priority: "",
    date: ""
  };
  const [taskList, setTaskList] = useState(initialValues);
  const date = new Date();

  const HandleChange = (event) => {
    const { name, value } = event.target;
    

    setTaskList({ ...taskList, [name]: value, date:date });
  };

  const onSubmit = (event) => {        
    event.preventDefault();
    addTask(taskList);
    setTaskList(initialValues);
    setOpenM(!openM)
  };


  
  
  return (
    <Box>
      <Button onClick={() => setOpenM(!openM)}>Agregar Item</Button>
      <Modal
        className={useStyles().modal}
        open={openM}
        onClose={() => setOpenM(!openM)}
      >
        <form onSubmit={(event) => onSubmit(event)} className={useStyles().paper}>
          <Typography>Agregar un nuevo items</Typography>

          <TextField required
            name="title"
            type={"text"}
            label="Titulo"
            value={taskList.title}
            onChange={(event) => HandleChange(event)}
          />
          <TextField
            name="description"
            type={"text"}
            label="Descripcion"
            value={taskList.description}
            onChange={(event) => HandleChange(event)}
          />
          <FormControl>
            <FormLabel>Prioridad</FormLabel>
            <Select
              name="priority"
              value={taskList.priority}
              label="priority"
              onChange={(event) => HandleChange(event)}
            >
              <MenuItem value={"low"}>baja</MenuItem>
              <MenuItem value={"medium"}>media</MenuItem>
              <MenuItem value={"high"}>alta</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" >Agregar</Button>
        </form>
      </Modal>
    </Box>
  );
};

//const useStyles = makeStyles(()=>({
const useStyles = makeStyles(() => ({
  root: {},
  modal: { display: "flex", justifyContent: "center", alignItems: "center" },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "400px",
  },
}));
