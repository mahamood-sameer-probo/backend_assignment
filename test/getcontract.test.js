import * as chai  from 'chai'
import chaiHttp from 'chai-http';
import { app } from "../app.js"

chai.should();
let chailib = await chai.use(chaiHttp)


describe("Testing the get contract API",()=>{
    describe("Id is present",()=>{
        it("It should not show error",(done)=>{
            chailib.request(app).get('/get_contract/123').end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
        })
    })
    describe("Id is not present",()=>{
        it("It should show error",(done)=>{
            const id = '';
            chailib.request(app).get(`/get_contract/${id}`).end((err,res)=>{
                res.should.have.status(404);
                done();
            })
        })
    })
})