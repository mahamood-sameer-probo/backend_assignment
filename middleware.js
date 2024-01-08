export const verify_details_contract=(req,res,next)=>{
    const {contract_id,contract_name,contract_description,user_id,contract_amount} = req.body;
    if(contract_id === null || contract_id === "" || contract_id === undefined){
        res.status(400).send({
            Message:"Bhai contract_id nahi hee"
        })
    }
    else if(user_id === null || user_id === undefined || user_id === ""){
        res.status(400).send({
            Message:"Bhai user_id nahi hee"
        })
    }
    else if(contract_name === null ||  contract_name === "" || contract_name === undefined){
        res.status(400).send({
            Message:"Bhai Contract ka name likho"
        })
    }
    else if(contract_description === null || contract_description === "" || contract_description === undefined){
        res.status(400).send({
            Message:"Bhai Contract ka description likho"
        })
    }
    else if(contract_amount === null || contract_amount === undefined || contract_amount === ""){
        res.status(400).send({
            Message:"Bhai Contract ka amount daalo"
        })
    }
    else{
        next()
    }
}

export const verify_id = (req,res,next)=>{
    const {id} = req.params;
    if(id === null || id === undefined || id === "" || id === " "){
        res.status(404);
    }else{
        next()
    }
}