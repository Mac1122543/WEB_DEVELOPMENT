var phno=5469871236;
var name="zedi";

console.log(isNaN(phno));


console.log(isNaN(name));

var u=phno;

if(isNaN(u)==false)
{
    console.log("it is  a valid phone number");

}
else{
    console.log("plz provide valid phone number");
}




console.log("--------->exercise<----------");

console.log(NaN===NaN);
console.log(Number.NaN===NaN);

console.log(isNaN(Number.NaN));

console.log(isNaN(NaN));

console.log(isNaN(Number.NaN));

console.log(isNaN(Number.isNaN(NaN)));
// true =====>1 which is number
// console.log(isNaN(true));
console.log(Number.isNaN(NaN));