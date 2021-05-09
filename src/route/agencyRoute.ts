import {getAgencies, saveAgency} from "../controller/AgencyController";

export const AppRoutes = [
    {
        path: "/agencies",
        method: "get",
        action: getAgencies
    },
    
    {
        path: "/agency",
        method: "post",
        action: saveAgency
    }
];