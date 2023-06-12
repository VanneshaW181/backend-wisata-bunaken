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
    const ceklogin = await db.query(
    `SELECT * users WHERE email='${loginData.email}' AND password='${loginData.password}'` 
    )

    if (ceklogin.length > 0) {
        message = "Berhasil Login";
    } else {
        message = "Email atau Password salah!";
    }

  let message = "Error";

  return { message };
}


module.exports = {
    getlogin,
    postlogin,
};
