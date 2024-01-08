import mysql from "mysql2";

const pool = mysql.createPool({
    user:"root",
    password:"Sameer@22",
    database:"Probo",
    host:"localhost"
}).promise()


export const Push_Contract =async(contract_id,contract_name,contract_description,user_id,contract_amount)=>{
    const result = await pool.query(`INSERT INTO Contracts 
        (contract_id,contract_name,contract_description,user_id,contract_amount) 
        VALUES 
        (
            '${contract_id}','${contract_name}','${contract_description}','${user_id}',${contract_amount}
        )
    `)
    return result
}

export const Update_Contract =async(contract_id,contract_name,contract_description,user_id,contract_amount)=>{
    const result = await pool.query(`
        UPDATE Contracts
        SET
        contract_name = '${contract_name}',
        contract_description = '${contract_description}',
        contract_amount = ${contract_amount}
        WHERE contract_id = '${contract_id}'
    `)
    return result
}
export const Delete_Contract =async(contract_id)=>{
    const result = await pool.query(`
        DELETE FROM Contracts WHERE contract_id = '${contract_id}'
    `)
    return result
}
export const Get_Contract = async(contract_id)=>{
    const result = await pool.query(`
        SELECT * FROM Contracts WHERE contract_id = '${contract_id}'
    `)
    return result
}
export const Get_Contracts_of_USER = async(user_id,startindex,limit)=>{
    const result = await pool.query(`
        SELECT * FROM Contracts WHERE user_id = '${user_id}'
        LIMIT ${limit} 
        OFFSET ${startindex}
    `)
    return result
}