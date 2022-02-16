const { search } = require("./logic");

test("test search by name", function () {
  const actual = search(
    [
      {
        char_id: 2,
        name: "Jesse Pinkman",
        birthday: "09-24-1984",
      },
      {
        char_id: 3,
        name: "Skyler White",
        birthday: "08-11-1970",
      },
      {
        char_id: 4,
        name: "Walter White Jr.",
        birthday: "07-08-1993",
      },
      {
        char_id: 5,
        name: "Henry Schrader",
        birthday: "Unknown",
      },
    ],
    "Jesse"
  );
  const expected = [
    {
      char_id: 2,
      name: "Jesse Pinkman",
      birthday: "09-24-1984",
    },
  ];
  expect(actual).toEqual(expected);
});
