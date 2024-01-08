import * as chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../app.js";

chai.should();
let chailib = chai.use(chaiHttp);

describe("Testing the Update contract API", () => {
  describe("Contract name is not present", () => {
    it("It should show error", (done) => {
        const contract = {
            "contract_id":'3',
            "contract_name":null,
            "contract_description":"This is a sample one",
            "contract_amount":10,
            "user_id":"1234"
        }
      chailib
        .request(app)
        .put("/update_contract")
        .send(contract)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
