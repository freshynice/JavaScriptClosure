function myPrint() {
  const name = 'Sansanee L.';

  const inner_func = function myName() {
    document.writeln(name);
  };
  
  return inner_func;
}

const printName = myPrint();
printName(); // Sansanee L.