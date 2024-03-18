import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Module = buildModule("Module", (m) => {

  const deploy = m.contract("Polmo");

  return { deploy };
});

export default Module;
