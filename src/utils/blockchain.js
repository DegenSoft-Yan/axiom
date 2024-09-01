import ERC20_ABI from "./abi/erc20.json";
import XDAOabi from "./abi/XDAO.json";
import crowdAbi from "./abi/crowd.json";
// export const contracts = {
//   XDAO: {
//     address: "0x0cf784bba0FFA0a7006f3Ee7e4357E643a07F6e7",
//     abi: XDAOabi,
//   },
//   XDAOToken: {
//     address: "0x71eebA415A523F5C952Cc2f06361D5443545Ad28",
//   },
//   WBTCToken: {
//     address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
//   },
//   AAVEWBTCToken: {
//     address: "0x078f358208685046a11C85e8ad32895DED33A249",
//   },
//   LPToken: {
//     address: "0x7f1Dd51843D8C4106213d0a4C3a7e96306C5d86F",
//   },
//   AxiomToken: {
//     address: "0x09a613f9d29e2c14238b219bd0b78c61ad7d40c9",
//   },
//   erc20Abi,
// };

export const contracts = {
  XDAO: {
    address: "0x711e14ebc41a8f1595433fa4409a50bc9838fc03",
    abi: XDAOabi,
  },
  XDAOToken: {
    // только для проверки условия
    address: "0x71eebA415A523F5C952Cc2f06361D5443545Ad28",
  },
  WBTCToken: {
    // токен который продаем
    address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
  },
  AAVEWBTCToken: {
    // только для отображения внизу на фронте
    address: "0x078f358208685046a11C85e8ad32895DED33A249",
  },
  // AAVEWBTCToken: { // только для отображения внизу на фронте
  //   address: "0x078f358208685046a11C85e8ad32895DED33A249",
  // },

  LPToken: {
    // токен за который покупаем
    address: "0xd1903ee89EF554dDC92cD2C3143F752BC85FDB3c",
  },
  AxiomToken: {
    //для навигации и получения sale info
    address: "0xf878d10a8b95bdee2747bd1faf7a3f3e2b7f19be",
  },
  crowd: {
    address: "0x0cf784bba0FFA0a7006f3Ee7e4357E643a07F6e7",
    abi: crowdAbi,
  },
  erc20Abi: ERC20_ABI,
};

export const AAVEWBTCOwner = "0xf878d10a8b95bdee2747bd1faf7a3f3e2b7f19be";

export const CURRENT_DAO_INDEX = 0;

export const DAOs = {
  axBTC: "0xf878d10a8b95bdee2747bd1faf7a3f3e2b7f19be",
  axAltPortfolio: "0xeebe6f7fd87ed28748f5e4d3e339ba0f28e90782",
  axUltra: "0xe8740f7786ae2c674e484a71741247ee22fb125a",
  axAirdrop: "0xf958e82b5a8e615cb3476b59f9589c45df67acca",
  axSafe: "0xdb95465de86c947f7de927eb604bad526696881b",

  axBTCLP: "0xd1903ee89EF554dDC92cD2C3143F752BC85FDB3c",
  axAltPortfolioLP: "0x8C3fce8E9bB082eFe5fB8922A45D0619Cae02435",
  axUltraLP: "0x0a240713C9dB821C51f36F4621d6ac1F6e4D3745",
  axAirdropLP: "0x24536722187680Eb71C270c7cC45A44C34162381",
  axSafeLP: "0x72F2fE2dF156ab863200B011A0b008A8a306F926",
};
