import express from "express";
import { Push_Contract,Update_Contract,Delete_Contract,Get_Contract,Get_Contracts_of_USER } from "./db.js";
import {verify_details_contract,verify_id} from './middleware.js'

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("This is Home Page")
})
router.post('/create_contract',verify_details_contract,(req,res)=>{
    const {contract_id,contract_name,contract_description,user_id,contract_amount} = req.body;
    Push_Contract(contract_id,contract_name,contract_description,user_id,contract_amount).then((result)=>{
        res.status(200).send({
            Message:"Create Hogaya Bhai"
        })
    })
})
router.put('/update_contract',verify_details_contract,(req,res)=>{
    const {contract_id,contract_name,contract_description,user_id,contract_amount} = req.body;
    Update_Contract(contract_id,contract_name,contract_description,user_id,contract_amount).then((result)=>{
        res.status(200).send({
            Message:"Update Hogaya Bhai"
        })
    })
})
router.delete('/delete_contract',(req,res)=>{
    const {contract_id} = req.body;
    console.log(contract_id)
    if(contract_id === null || contract_id === " " || contract_id === "" || contract_id === undefined){
        res.status(400).send({
            Message:"Bhai contract_id nahi hee"
        })
    }
    else{
        Delete_Contract(contract_id).then((result)=>{
            res.status(200).send({
                Message:"Delete Hogaya Bhai"
            })
        })
    }
})
router.get('/get_contract/:id', verify_id,(req,res)=>{
    const {id} = req.params;
    Get_Contract(id).then((result)=>{
        res.status(200).send(result[0])
    })
})
router.get('/get_contracts/:id',verify_id,(req,res)=>{
    const {id} = req.params;
    console.log(req.params)
    let page = req.query.page;
    let limit = req.query.limit
    let startindex = (page-1)*limit;
    Get_Contracts_of_USER(id,startindex,limit).then((result)=>{
        res.status(200).send(result[0])
    })
})

export default router;
