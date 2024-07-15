module.exports = () => {
  return {
    statusCode: 200,
    errorMessage: null,
    source: "Products",
    searchTerm: "",
    resultCount: 1,
    contents: [
      {
        productId: 1,
        productName: "Car insurance",
        providerName: "LIC",
        policyType: "Base Policy",
        basePolicy: "",
        isSpouseCoverage: true,
        isHandicappedChildrenCoverage: true,
        isParentsCoverage: true,
        isInlawsCoverage: true,
        numberOfHandicappedChildren: 2,
        numberOfParents: 2,
        numberOfInLaws: 2,
        numberOfChildren: 2,
        premiumChart: [
          {
            productPremiumId: 1,
            sumInsured: 100000,
            selfOnlyPremium: 5000,
            spousePremium: 3000,
            child1Premium: 2000,
            child2Premium: 2000,
            parent1Premium: 4000,
            parent2Premium: 4000,
            inLaw1Premium: 3500,
            inLaw2Premium: 3500,
          },
          {
            productPremiumId: 2,
            sumInsured: 200000,
            selfOnlyPremium: 6000,
            spousePremium: 3500,
            child1Premium: 2500,
            child2Premium: 2500,
            parent1Premium: 4500,
            parent2Premium: 4500,
            inLaw1Premium: 4000,
            inLaw2Premium: 4000,
          },
        ],
      },

      {
        productId: 2,
        productName: "Car insurance",
        providerName: "LIC",
        policyType: "Top up policy",
        basePolicy: "Home insurance",
        isSpouseCoverage: true,
        isHandicappedChildrenCoverage: true,
        isParentsCoverage: true,
        isInlawsCoverage: true,
        numberOfHandicappedChildren: 2,
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
                sumInsured: 100000,
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
          },
        ],
      },
    ],
    paging: {
      numberOfPages: 10,
      pageNumber: 1,
      recordsPerPage: 50,
      nextPageNumber: 0,
      previousPageNumber: 0,
    },
    sorting: {
      sortName: "id",
      sortDirection: "desc",
    },
  };
};
