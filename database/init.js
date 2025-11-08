
const db = require('./db');
// Creamos las tablas
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS roles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL UNIQUE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      correo TEXT NOT NULL UNIQUE,
      contrasena TEXT NOT NULL,
      intentos INTEGER DEFAULT 0,
      is_blocked INTEGER DEFAULT 0,
      rol_id INTEGER NOT NULL,
      FOREIGN KEY (rol_id) REFERENCES roles(id)
    )
  `);

  // Insertamos roles iniciales si no existen
  db.run(`INSERT OR IGNORE INTO roles (id, nombre) VALUES (1, 'Administrador'), (2, 'Usuario')`);
});

console.log("Base de datos creada con tablas roles y usuarios")
