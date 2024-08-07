module.exports = () => {
  return {
    productId: 2,
    productName: "Car insurance",
    providerName: "abc",
    providerName: "LIC",
    policyType: { id: 2, name: "TopupPolicy" },
    basePolicy: { id: 1, name: "BasePolicy 1" },
    isSpouseCoverage: true,
    isHandicappedChildrenCoverage: true,
    isParentsCoverage: true,
    isInlawsCoverage: true,
    numberOdHandicappedChildren: 2,
    numberOfParents: 2,
    numberOfInLaws: 2,
    numberOfChildren: 2,
    premiumChart: [
      {
        productPremiumId: 3,
        sumInsured: 100000,
        selfOnlyPremium: 5000,
        spousePremium: 3000,
        child1Premium: 2000,
        child2Premium: 2000,
        parent1Premium: 4000,
        parent2Premium: 4000,
        inLaw1Premium: 3500,
        inLaw2Premium: 3500,
        topUpOptions: [
          {
            productPremiumId: 311,
            sumInsured: 10000,
            selfOnlyPremium: 5000,
            spousePremium: 3000,
          },
        ],
      },
      {
        productPremiumId: 4,
        sumInsured: 200000,
        selfOnlyPremium: 6000,
        spousePremium: 3500,
        child1Premium: 2500,
        child2Premium: 2500,
        parent1Premium: 4500,
        parent2Premium: 4500,
        inLaw1Premium: 4000,
        inLaw2Premium: 4000,
        topUpOptions: [],
      },
    ],
  };
};
