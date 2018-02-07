
// Create User schema



function User(firstName,lastName,password,latitude,longitude) {
  this.firstName= firstName;
  this.lastName = lastName;
  this.password = password;
  this.latitude= latitude;
  this.longitude= longitude;
}

module.export = User;

// var singleuser = new User({firstName: 'Niranjan', lastName: 'Sovani', password: 'Abc@7817', latitude: '18.5791138', longitude:'73.7391434'});
// console.log(singleuser);
