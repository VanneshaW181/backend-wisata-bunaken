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

  async function postlogin(loginData, res, next) {
    
      const [ceklogin] = await db.query(
        "SELECT * FROM users WHERE email=? AND password=?",
        [loginData.body.email, loginData.body.password]
        
      )
  
      if (ceklogin.length === 0) {
       
          message = "Email atau Password salah!"
     
      } else {
       
           message = "Berhasil Login"
    
    }

  

  let message = "Error";

  return { message };
}


module.exports = {
    getlogin,
    postlogin,
};
