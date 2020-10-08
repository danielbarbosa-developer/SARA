const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/server.js');
const routes = require('../src/routes/routesStudents.js');

const should = chai.should();

chai.use(chaiHttp);

describe('routes', function(){

    var urlRegisterTest = '/registers/students/';

    var newRegister = {name: 'John'}
    
    it('Add new Student', (done)=>{

        chai.request(server)
            .post(urlRegisterTest)
            .send(newRegister)
            .end(function(err, res){
                res.should.have.status(201);
                done();
            })
    });

    it('Delete a Student', (done)=>{

        chai.request(server)
            .delete(urlRegisterTest)
            .send(newRegister)
            .end(function(err, res){
                res.should.have.status(200);
                done();
            })
    })


});