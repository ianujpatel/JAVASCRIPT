 // -------------------------------------------strings methods --------------------------------------

  // < trim method used to rmv white space from both sides >
  let msg = "   hello   ";
  let newmessages = msg.trim(); //hello
  console.log(newmessages);

  // uppercase and lower case
  let str = "Random String";
  let inbigletter = str.toUpperCase();
  console.log(inbigletter);
  let insmallletter = str.toLocaleLowerCase();
  console.log(insmallletter);

  // with arguments < index of >
  let str1 = "ilovecoding";
  console.log(str1.indexOf("love"));  //1
  console.log(str1.indexOf("j"));   // -1 

  // method chaining 
  let str2 = "      hello     "
  console.log(str2.toUpperCase().trim());   // HELLO

  // <SLICE>
  let str3 = "ILOVECODING";
  console.log(str3.slice(5));
  console.log(str3.slice(1,5));
  
  // <replace>
  let str4 = "ILOVECODING";
  console.log(str4.replace("l","x"));

  // repeat 
  let str5 = "CODING";  
  console.log(str5.replace(3));
