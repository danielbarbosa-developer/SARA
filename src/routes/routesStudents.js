const { route } = require('../app/app.js');
const repository = require('../repository/repository.js');

const routes = (app) =>{

    app.post('/registers/students', (req, res)=>{
        try{
            repository.insertStudent(req.body.name);
            res.status(201).send('CREATED');
        }
        catch(err){
            console.log(err);
            res.status(500).send('INTERNAL_SERVER_ERROR');
        }
        
    });
    app.delete('/registers/students/', (req, res)=>{
        try{
            repository.deleteStudent(req.body.name);
            res.status(200).send('OK');
        }
        catch(err){
            console.log(err);
            res.status(500).send('INTERNAL_SERVER_ERROR');
        }
    });
}

module.exports = routes;