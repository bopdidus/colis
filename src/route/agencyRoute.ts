import {getAgencies, saveAgency, deleteAgency, getAgency} from "../controller/AgencyController";

export const AgencyRoutes = [
    {
        path: "/agencies",
        method: "get",
        action: getAgencies
    },
    
    {
        path: "/agency",
        method: "post",
        action: saveAgency
    },
    {
        path: "/agency/:id",
        method: "get",
        action: getAgency
    },
    {
        path: "/agency",
        method: "delete",
        action: deleteAgency
    }
];