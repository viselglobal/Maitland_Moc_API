module.exports = () => {
  return {
    items: [
      {
        id: 1,
        name: "admin",
        application: { id: 1, name: "app1" },
        groups: [
          { id: 1, name: "Add User" },
          { id: 2, name: "Edit User" },
          { id: 3, name: "Delete User" },
          { id: 4, name: "Add Group" },
          { id: 5, name: "Edit Group" },
          { id: 6, name: "Delete Group" },
        ],
      },
      {
        id: 2,
        name: "user",
        application: { id: 1, name: "app2" },
        groups: [
          { id: 1, name: "Add User" },
          { id: 2, name: "Edit User" },
        ],
      },
    ],
    totalCount: 1000,
    totalPages: 100,
    currentPage: 1,
  };
};
