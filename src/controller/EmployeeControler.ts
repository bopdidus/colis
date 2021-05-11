import {getManager} from "typeorm";
import {Employee} from "../entity/Employee";
import {Agency} from "../entity/Agency";
import {Request, Response} from "express";
import {validate} from "class-validator";

export async function saveEmployee (req:Request, res: Response){
    
        const repo = getManager().getRepository(Employee);
        const employee =  repo.create(req.body);
        const errors = await validate(employee);

        if(errors.length > 0){
            return res.status(501).send({"Message": "Occured errors "+errors+" ."})
        }else{
            const repo = getManager().getRepository(Agency);
             const agency = await repo.findOne(req.body.agency)
             employee[0].agency = agency
            await repo.save(employee)

            res.send(employee)
        }
        
    }

export async function getEmployees (req:Request, res: Response){

        const repo = getManager().getRepository(Employee);
    
       const employees = await repo.find().catch(err=> {
            console.log(err)
        })
    
        res.send(employees)
}

export async function getEmployee (req:Request, res: Response){
    const repo = getManager().getRepository(Employee);
    const employee = await repo.findOneOrFail(req.params.email).catch(err=> {
        console.log(err)
    })

    res.send(employee)
}

export async function deleteEmployee (req:Request, res: Response){
    const repo = getManager().getRepository(Employee);
    const employee = await repo.findOne(req.params.email)
    await repo.remove(employee).catch(err=> {
        console.log(err)
    })

    res.send({"message": ""+employee+" was deleted successfully"})
}