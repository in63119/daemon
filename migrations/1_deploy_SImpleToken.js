const simpleToken = artifacts.require("SimpleToken");

module.exports = function (deployer) {
  // 컨트랙트에 들어가는 인풋을 여기에
  deployer.deploy(simpleToken, "InSimpleToken", "IST");
};
