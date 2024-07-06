// let name = {
//   firstname: "Sandeep",
//   lastname: "Rawat"
// }

// function myName (city, state) {
//   console.log(this.firstname + " " + this.lastname + " " + city + " " + state);
// }

// Function.prototype.myBind =function (...args) {
//   let obj = this;
//   // console.log(args);
//   let value = args.slice(1);
//   return (...args2)=> {
//     // console.log("obj", obj);
//     obj.apply(args[0], [...value, ...args2]);
//   }
// }
// let a = myName.myBind(name, "Himachal");
// a("Kedarnath");

const cart = ["shoe", "pant", "kurta "];
function createOrder(data, callback){
  let value = data.join(" ");
  callback(value);
}

function paymentProcess(order) {
  console.log("payment processed", order);
}

createOrder(cart,
  paymentProcess
);