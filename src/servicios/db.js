import Dexie from "dexie";

const dbName = "taskListDB";

export const db = new Dexie(dbName);

db.version(1).stores({
  taskList: "++id, title, description, priority,date", // Primary key and indexed props
});

export const addTask = (data) => {    
  db.taskList.add(data)
  .then(()=>console.log("Tarea agregada"));
};


export const readData =(setData)=>{
setData(db.taskList.toArray())
}
