const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getregister(page = 1) {
    const offset = helper.getregister(page, config.listPerPage);
    const rows = await db.query(
      `SELECT * 
      FROM register LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };
  
    return {
      data,
      meta,
    };
  }

async function postregister(registerData) {
    const cekemail = await db.query ( 
        `SELECT * users WHERE email='${registerdata.email}'`
    )
    if (cekemail.length != 1) {
        const result = await db.query(
        `INSERT INTO users
          (username, email, password) 
          VALUES 
          ('${registerData.username}', '${registerData.email}', '${registerData.password}')`
      );
    } else { 
        message = "Gunakan email yang lain";
    }

  let message = "Error";

  if (result.affectedRows) {
    message = "Selamat, register berhasil!";
  }

  return { message };
}

module.exports = {
    getregister,
    postregister,
};
