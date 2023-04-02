let newUser = {
  _firstName:"",
  _lastName:"",

  getLogin: function(fName, lName){
    let sumString = fName[0] + lName;
    alert(sumString);
  }
}

Object.defineProperty(newUser, 'firstName',{
  get(){
    return this._firstName;
  },
  set(val){
    this._firstName = val;
  }
});

Object.defineProperty(newUser, 'lastName',{
  get(){
    return this._lastName;
  },
  set(val){
    this._lastName = val;
  }
});

function createNewUser(){
  let fName = prompt("f");
  let lName = prompt("l");
  newUser.getLogin(fName, lName);

  return newUser;
}

createNewUser();