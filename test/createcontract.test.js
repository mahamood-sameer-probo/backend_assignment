import * as chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../app.js";

chai.should();
let chailib = await chai.use(chaiHttp);

describe("Testing the create contract API", () => {
  describe("Contract ID is not present", () => {
    it("It should show error", (done) => {
        const contract = {
            "contract_id":null,
            "contract_name":"Sample",
            "contract_description":"This is a sample one",
            "contract_amount":10,
            "user_id":"1234"
        }
      chailib
        .request(app)
        .post("/create_contract")
        .send(contract)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
