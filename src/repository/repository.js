const mysql = require('mysql2');

function connect(){

    const url = 'mysql://sara:sara2020@localhost:3306/Sara';
    const connection = mysql.createConnection(url);
    console.log("Connected with MySQL");
    return connection;

}

function selectAll(){
    const conn = connect();
    const selectQuery = 'SELECT * FROM Student';
    return conn.query(selectQuery);
}

function insertStudent(name){
    const conn = connect();
    const insertQuery = 'INSERT INTO Student (name) VALUES (?)';
    return conn.query(insertQuery, name);
}

function deleteStudent(name){
    const conn = connect();
    const deleteQuery = 'DELETE FROM Student WHERE name = ?';
    return conn.query(deleteQuery, name);
}

module.exports = {selectAll, insertStudent, deleteStudent};


