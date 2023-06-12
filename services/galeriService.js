const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getGaleri(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM galeri LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function postGaleri(galeriData) {
  const result = await db.query(
    `INSERT INTO galeri 
      (nama, foto, deskripsi) 
      VALUES 
      ('${galeriData.nama}', '${galeriData.foto}', '${galeriData.deskripsi}')`
  );

  let message = "Error dalam pembuatan galeri";

  if (result.affectedRows) {
    message = "Galeri berhasil dibuat";
  }

  return { message };
}

module.exports = {
  getGaleri,
  postGaleri,
};
