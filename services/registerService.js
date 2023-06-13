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

  var message='';
  const cekemail = await db.query ( 
        `SELECT * FROM users WHERE email='${registerData.email}'`
    );
  
    if (cekemail.length === 0) {
        const result = await db.query(
        `INSERT INTO users
          (username, email, password) 
          VALUES 
          ('${registerData.username}', '${registerData.email}', '${registerData.password}');`
          );

          if (result.affectedRows) {
        message = "Selamat, register berhasil!";
      }
    } else { 
        message = "Gunakan email yang lain";
    }


console.log(message);
  return { message };
}

module.exports = {
    getregister,
    postregister,
};
