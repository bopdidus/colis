import {getManager} from "typeorm";
import {Employee} from "../entity/Employee";
import {Agency} from "../entity/Agency";
import {Request, Response} from "express";
import {validate} from "class-validator";
const bcrypt = require('bcrypt');
const saltRounds = 17;


export async function saveEmployee (req:Request, res: Response){
    
        const repo = getManager().getRepository(Employee);
        let employee =  new Employee()
            employee.email= req.body.email;
            employee.cni= req.body.cni;
            employee.firstName= req.body.firstName;
            employee.lastName= req.body.lastName;
            employee.nationality= req.body.nationality;
            employee.phoneNumber= req.body.phoneNumber;
            employee.password= bcrypt.hashSync(req.body.password, saltRounds);
            employee.isActive=false;
            employee.address={
                city: req.body.city,
                country: req.body.country,
                quater: req.body.quater}
           
        const errors = await validate(employee);

        if(errors.length > 0){
            return res.status(501).send({"Message": "Occured errors "+errors+" ."})
        }else{
            if(req.body.agency != null){
                const repoAgency = getManager().getRepository(Agency);
                const agency = await repoAgency.findOne(req.body.agency)
                employee.agency = agency
               repo.save(employee).then(employee=>{
                   res.send(employee)
               }).catch(err=>{
                   res.status(500).send(err)
               })
            }else{
                return res.send({"message":"The employee must belong to an agency"})
            }
            

            
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