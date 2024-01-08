import * as chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../app.js";

chai.should();
let chailib = await chai.use(chaiHttp);

describe("Testing the Delete contract API", () => {
  describe("Contract ID is not present", () => {
    it("It should show error", (done) => {
        const contract_id = null
      chailib
        .request(app)
        .delete("/delete_contract")
        .send(contract_id)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
