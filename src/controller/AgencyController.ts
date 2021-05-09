import {getManager} from "typeorm";
import {Agency} from "../entity/Agency";
import {Request, Response} from "express";

export async function saveAgency (req:Request, res: Response){

        const repo = getManager().getRepository(Agency);
    
        const agency =  repo.create(req.body);
    
        await repo.save(agency).then(agency=>{
            console.log(agency)
        }).catch(err=> {
            console.log(err)
        })
    
        res.send(agency)
    }

export async function getAgencies (req:Request, res: Response){

        const repo = getManager().getRepository(Agency);
    
       const agencies = await repo.find().catch(err=> {
            console.log(err)
        })
    
        res.send(agencies)
}

