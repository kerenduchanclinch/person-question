type Person = {
  name: string;
};

function test() {
  const person1: Person = {
    name: 'Bob',
  };

  console.log('person1 BEFORE:', person1);

  // rename Bob => John:
  // TODO

  console.log('person1 AFTER:', person1);
}

export default test;
