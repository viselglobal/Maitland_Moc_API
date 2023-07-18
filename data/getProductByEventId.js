module.exports = () => {
  return {
    eventId: 1,
    approvalStatus: "Approved",
    clientProductStructureCode: "ABC1",
    client: "ABSA",
    assetOwner: "MI EQUITY FUND",
    products: [
      {
        productId: 1,
        productName: "MI EQUITY FUND",
        todaysCashFlow: 2323232,
        residualCash: 232,
        notes: "",
        isStaticData: false,
        isChecked: true,
      },
      {
        productId: 2,
        productName: "MI EQUITY FUND",
        todaysCashFlow: 2323232,
        residualCash: 232,
        notes: "",
        isStaticData: true,
        isChecked: false,
      },
      {
        productId: 3,
        productName: "MI EQUITY FUND",
        todaysCashFlow: 2323232,
        residualCash: 232,
        notes: "",
        isStaticData: true,
        isChecked: true,
      },
    ],
  };
};
