const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getPenginapan(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM penginapan LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function postPenginapan(galeriData) {
  const result = await db.query(
    `INSERT INTO penginapan 
      (nama_penginapan, deskripsi_penginapan, kapasitas_penginapan, lokasi_penginapan, foto_penginapan) 
      VALUES 
      ('${galeriData.nama_penginapan}', '${galeriData.deskripsi_penginapan}', '${galeriData.kapasitas_penginapan}', '${galeriData.lokasi_penginapan}', '${galeriData.foto_penginapan}')`
  );

  let message = "Error dalam pembuatan penginapan";

  if (result.affectedRows) {
    message = "Penginapan berhasil dibuat";
  }

  return { message };
}

module.exports = {
  getPenginapan,
  postPenginapan,
};
