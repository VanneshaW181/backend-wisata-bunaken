const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getlogin(page = 1) {
    const offset = helper.getlogin(page, config.listPerPage);
    const rows = await db.query(
      `SELECT * 
      FROM login LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };
  
    return {
      data,
      meta,
    };
  }

async function postlogin(loginData) {
    const cekemail = await db.query(
    `SELECT * users WHERE email='${loginData.email}'`
    )

    if (cekemail.length > 0) {

        const result = await db.query(
        `INSERT INTO users
          (username, email, password) 
          VALUES 
          ('${registerData.username}', '${registerData.email}', '${registerData.password}')`
      );
    } else {
        message = "email sudah terdaftar";
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
