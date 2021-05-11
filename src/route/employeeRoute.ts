import {getEmployees, getEmployee, deleteEmployee, saveEmployee} from "../controller/EmployeeControler";

export const EmployeeRoutes = [
    {
        path: "/employees",
        method: "get",
        action: getEmployees
    },
    
    {
        path: "/employee",
        method: "post",
        action: saveEmployee
    },
    {
        path: "/employee/:id",
        method: "get",
        action: getEmployee
    },
    {
        path: "/employee",
        method: "delete",
        action: deleteEmployee
    }
];