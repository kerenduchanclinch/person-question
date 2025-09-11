type Person = {
  name: string;
  age: number;
  address: {
    city: string,
    zipCode: number
  }
};

function test() {
  const person1: Person = {
    name: 'Bob',
    age: 25,
    address: {
      city: "New York",
      zipCode: 1234
    }
  };

  console.log('person1 BEFORE:', person1);

  // rename Bob => John:
  // TODO

  console.log('person1 AFTER:', person1);
}

export default test;
export type { Person }
