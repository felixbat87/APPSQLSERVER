const config = require('../dbconfig');//Instancia de dbconfig.js
const sql = require('mssql');//se necesita paquete mssql
//Funcion Async: Asynccrona esta devuelve un objeto
exports.getCategoria = async (req, res) => {
    try {
        await sql.connect(config);
        const categorias = await sql.query("SELECT * FROM TABLA_API");
        res.json(categorias.recordset);
    } catch (error) {
        console.log(error);
    }
}

exports.getCategoriaById=async(req, res)=> {
    try {
        await sql.connect(config);
        const categorias = await sql.query(`SELECT * FROM TABLA_API WHERE CAT_ID='${req.params.id}'`);
        res.json(categorias.recordset);
    } catch (error) {
        console.log(error);
    }
}

exports.postCreateCategoria= async(req,res)=>{
    try {
        let data=Object.values(req.body);
        res.status(200).json({status: 'ok', send:req.requestTime});
        let cat_nom=data[0];
        let cat_obs=data[1];
        await sql.connect(config);
        const categorias = await sql.query(`INSERT INTO TABLA_API (CAT_NOM,CAT_OBS) VALUES('${cat_nom}','${cat_obs}')`);
    } catch (error) {
        console.log(error);
    }
}

exports.updateCategoria= async (req,res)=>{
   try {
    let data=Object.values(req.body);
    res.status(200).json({status: 'ok', send:req.requestTime});
    let cat_nom=data[0];
    let cat_obs=data[1];
    await sql.connect(config);
    const categorias = await sql.query(`UPDATE  TABLA_API SET CAT_NOM='${cat_nom}',CAT_OBS='${cat_obs}' WHERE CAT_ID='${req.params.id}'`);
   } catch (error) {
    
   }
}

