import {getManager} from "typeorm";
import {Agency} from "../entity/Agency";
import {Request, Response} from "express";

export async function saveAgency (req:Request, res: Response){

    var format = /[!@#$%^&*()+\=\[\]{};':"\\|,<>\/?]+/;
    
        const repo = getManager().getRepository(Agency);
        if(format.test(req.body.name) == false){
           await repo.findOne({name: req.body.name}).then(ag=>{
                if(ag == null){
                    const agency =  repo.create({
                        name: req.body.name,
                        address:{
                            city:req.body.city,
                            country:req.body.country,
                            quater:req.body.quater
                        }
                    });
                    
                     repo.save(agency).then(agency=>{
                        console.log(agency)
                    }).catch(err=> {
                        console.log(err)
                    })
                
                    res.send(agency)
                }else{
                    return res.status(500).send({"message":"Existing agency"})
                }
            })
            
        }else{
           return res.status(501).send({"message": "The message doesn't contain special characters"})
        }
    }

export async function getAgencies (req:Request, res: Response){

        const repo = getManager().getRepository(Agency);
    
       const agencies = await repo.find().catch(err=> {
            console.log(err)
        })
    
        res.send(agencies)
}

export async function getAgency (req:Request, res: Response){
    const repo = getManager().getRepository(Agency);
    const agency = await repo.findOneOrFail(req.params.id).catch(err=> {
        console.log(err)
    })

    res.send(agency)
}

export async function deleteAgency (req:Request, res: Response){
    const repo = getManager().getRepository(Agency);
    const agency = await repo.findOne(req.params.id)
    await repo.remove(agency).catch(err=> {
        console.log(err)
    })

    res.send({"message": ""+agency+" was deleted successfully"})
}