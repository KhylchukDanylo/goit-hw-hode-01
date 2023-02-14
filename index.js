const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);
    case "get":
      const oneContacts = await getContactById(id);
      return console.log(oneContacts);
    case "add":
      const newContacts = await addContact({ name, email, phone });
      return console.log(newContacts);
    case "remove":
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "2" });
// invokeAction({
//   action: "add",
//   name: "Grisha",
//   email: "grisha@gmail.com",
//   phone: "(380) 98 630 66 71",
// });
// invokeAction({ action: "remove", id: 13 });

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);
// console.log(argv);
