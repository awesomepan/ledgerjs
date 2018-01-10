import Eth from "@ledgerhq/eth";

export default async comm => {
  const eth = new Eth(comm);
  const result = await eth.getAddress("44'/60'/0'/0'/0");
  return result;
};