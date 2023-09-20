const { response, request } = require("express");
const pool = require("../db/config");

const getUsers = async(req = request, res = response) => {
   const response = await pool.query('SELECT * FROM users');
   res.status(200).json(response.rows)
};

const getUsersById = async(req = request, res = response) => {
   const { id } = req.params;
   const response = await pool.query(`SELECT * FROM users WHERE id ='${id}'`);
   res.status(200).json(response.rows)
};

const getUsersByTaxID = async(req = request, res = response) => {
   const { taxid } = req.params;
   const response = await pool.query(`SELECT * FROM users WHERE taxid ='${taxid}'`);
   res.status(200).json(response.rows)
};

const postUsers = async(req = request, res = response) => {
   const {first_name,last_name,email,gender,TaxID} = req.body;

   //Validar que no se registre el mismo taxid
   const queryTaxIdEquals = `SELECT taxid FROM users WHERE taxid = '${TaxID}'`;
   const existEquialsTaxIdInDB = await pool.query(queryTaxIdEquals);
   if(!existEquialsTaxIdInDB.rowCount == 0) return res.status(400).json({ msg: "Ya se encuentra un usuario registrado con el mismo documento." });
   
   //Validar que no se registe el mismo email
   const queryEmailEquals = `SELECT email FROM users WHERE email = '${email}'`;
   const existEqualEmailInDB = await pool.query(queryEmailEquals);
   if (!existEqualEmailInDB.rowCount == 0) return res.status(400).json({ msg: "Ya se encuentra un usuario registrado con el mismo email." });

   const queryCreateUser = `INSERT INTO users(first_name, last_name, email, gender, taxid) VALUES ($1, $2, $3, $4, $5)`;
   await pool.query(queryCreateUser, [first_name, last_name, email, gender, TaxID]);
   res.status(200).json({
      msg:"Se creo el usuario de forma satisfactoria",
      body:{
         first_name,
         last_name,
         email,
         gender,
         TaxID,
      }
   })
 };

const deleteUser = async(req=response,res = response) =>{
   const { id } = req.params;
   const {first_name,last_name,email,taxid} = (await pool.query(`SELECT first_name,last_name,taxid,email FROM users WHERE id ='${id}'`)).rows[0];
   await pool.query(`DELETE FROM users WHERE id ='${id}'`);
   res.status(200).json({
      msg:"Se elimino el usuario de forma satisfactoria",
      body:{
         first_name,
         last_name,
         email,
         taxid,
      }
   })}

module.exports = { getUsers,postUsers,getUsersById,getUsersByTaxID,deleteUser};