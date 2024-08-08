module.exports = () => {
  return {
    statusCode: 200,
    errorMessage: null,
    source: "Products",
    searchTerm: "",
    resultCount: 1,
    contents: [
      {
        paymentId: 1,
        retireeName: "avdhoot",
        amount: 3423,
        date: "2023-07-01T10:00:00Z",
        associationName: "ICICI Bank",
        status: "initiated",
        paymentMode: "cheque",
      },
      {
        paymentId: 2,
        retireeName: "lakshman",
        amount: 5000,
        date: "2023-07-02T11:00:00Z",
        associationName: "HDFC Bank",
        status: "completed",
        paymentMode: "neft",
      },
      {
        paymentId: 3,
        retireeName: "ramachandra",
        amount: 2750,
        date: "2023-07-03T12:00:00Z",
        associationName: "SBI Bank",
        status: "rejected",
        paymentMode: "upi",
      },
      {
        paymentId: 4,
        retireeName: "sita",
        amount: 3200,
        date: "2023-07-04T13:00:00Z",
        associationName: "Axis Bank",
        status: "initiated",
        paymentMode: "cheque",
      },
      {
        paymentId: 5,
        retireeName: "bharata",
        amount: 4100,
        date: "2023-07-05T14:00:00Z",
        associationName: "Kotak Mahindra Bank",
        status: "completed",
        paymentMode: "neft",
      },
      {
        paymentId: 6,
        retireeName: "shatrughna",
        amount: 2900,
        date: "2023-07-06T15:00:00Z",
        associationName: "Yes Bank",
        status: "rejected",
        paymentMode: "upi",
      },
      {
        paymentId: 7,
        retireeName: "hanuman",
        amount: 3800,
        date: "2023-07-07T16:00:00Z",
        associationName: "ICICI Bank",
        status: "initiated",
        paymentMode: "cheque",
      },
      {
        paymentId: 8,
        retireeName: "sugriva",
        amount: 4300,
        date: "2023-07-08T17:00:00Z",
        associationName: "HDFC Bank",
        status: "completed",
        paymentMode: "neft",
      },
      {
        paymentId: 9,
        retireeName: "vibhishana",
        amount: 2950,
        date: "2023-07-09T18:00:00Z",
        associationName: "SBI Bank",
        status: "rejected",
        paymentMode: "upi",
      },
      {
        paymentId: 10,
        retireeName: "angada",
        amount: 3700,
        date: "2023-07-10T19:00:00Z",
        associationName: "Axis Bank",
        status: "initiated",
        paymentMode: "cheque",
      },
      {
        paymentId: 11,
        retireeName: "jambavan",
        amount: 3100,
        date: "2023-07-11T20:00:00Z",
        associationName: "Kotak Mahindra Bank",
        status: "completed",
        paymentMode: "neft",
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
