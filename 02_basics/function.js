function sayMyname(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("N");
    console.log("D");
}

//sayMyname()

function addtwonumbers(Number1,Number2){
     console.log(Number1 + Number2);

}
//addtwonumbers(3,7)


function loginUserMessage(username = "jam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 //console.log(loginUserMessage("anand"))
 //console.log(loginUserMessage("anand"))


function calculateCartPrice(...num1){
    return num1
}




///console.log(calculateCartPrice(200,400,422))


const user = {
    username: "anand",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)


handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

 console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));