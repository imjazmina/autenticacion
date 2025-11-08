const sqlite3 = require('sqlite3').verbose(); // 'verbose' ayuda a mostrar errores detallados
const path = require('path');

const dbPath = path.join(__dirname, 'auth.db');

// Conectamos a la base de datos (se crea si no existe)
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Error al conectar con la base de datos:', err.message);
  } else {
    console.log('✅ Conectado a la base de datos SQLite.');
  }
});

module.exports = db;