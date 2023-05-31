
function reverseString(str) {
    var newString = "";
    for(var i = str.length - 1; i>=0; i--){
      newString += str[i];
    }
    return newString;
  }
  
  console.log("Inverter \"Hello\" = " + reverseString("hello"));
  console.log("Inverter \"Howdy\" = " + reverseString("Howdy"));
  console.log("Inverter \"Greetings from Earth\" = " + reverseString("Greetings from Earth"));