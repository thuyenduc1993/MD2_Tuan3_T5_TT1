
let num = 5;
let de_num = 0;
try {
    if(de_num == 0) {
        throw new Error("1+2");
    } else {
        let sol = num / de_num;
    }
} catch(e) {
    console.log("Error : " + e);
}


// try{
//     ab();
//     // We have not declared the
//     // function ab anywhere
// } catch(e){
//     console.log("Error : "+ e.name);
// }



try{
    eval("alert('ES6 Exception Handling')");
} catch(e){
    console.log("Error : "+ e.name);
}
