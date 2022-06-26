let person = [
  {
    name: "Sakib",
    currencies: [
      {
        code: "AFN",
        name: "Afghan afghani",
      },
    ],
  },
];
// find code & name
for (let singleData of person) {
  console.log(singleData.name);
  console.log(singleData.currencies.code);
}
