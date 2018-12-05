function myPrint() {
  const name = 'Sansanee L.';

  const inner_func = function myName() {
    document.writeln(name);
  };
  
  return inner_func;
}

const printName = myPrint();
printName(); // Sansanee L. 

/****
Explanation:
From example above closure is special function inside function again
name is local variable of myPrint() and function myName() can see and call name to show, then printName is closure 

Pros: Inside function can call all variables of outside function to use no need to copy that variable first, can save memory from this reason.

Cons: For the beginner can get confused on it like me :)
****/