function createUser(){
   let newUser = {
    _firstName:prompt("f"),
    _lastName:prompt("l"),
   getLogin: function(){
     return console.log(this._firstName[0] + this._lastName)
     }
    }
    return newUser;
   };

   let u= createUser();
Object.defineProperty(u, 'firstName',{
  get(){
    return this._firstName;
  },
  set(val){
    this._firstName = val;
  }
});

Object.defineProperty(u, 'lastName',{
  get(){
    return this._lastName;
  },
  set(val){
    this._lastName = val;
  }
});

  u.getLogin();

// function createNewUser(){
//   let fName = prompt("f");
//   let lName = prompt("l");
//   newUser.getLogin(fName, lName);

//   return newUser;
// }
