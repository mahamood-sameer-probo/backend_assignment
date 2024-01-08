import * as chai  from 'chai'
import chaiHttp from 'chai-http';
import { app } from "../app.js"

chai.should();
let chailib = await chai.use(chaiHttp)


describe("Testing the get contracts API",()=>{
    describe("Id is present",()=>{
        it("It should not show error",(done)=>{
            chailib.request(app).get('/get_contracts/1234?page=1&limit=1').end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
        })
    })
})