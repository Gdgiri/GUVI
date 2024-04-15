let obj1 = { name: "person1", age: 5 };
        let obj2 = { age: 5, name: "person1" };
  
        // Step 1: Convert objects to strings
        let obj1String = JSON.stringify(obj1);
        let obj2String = JSON.stringify(obj2);
  
        // Step 2: Sort properties within strings
        let sortedObj1String = sortProperties(obj1String);
        let sortedObj2String = sortProperties(obj2String);
  
        // Step 3: Compare sorted strings
        if (sortedObj1String === sortedObj2String) {
          console.log("The JSON objects are equivalent.");
        } else {
          console.log("The JSON objects are not equivalent.");
        }
  
        function sortProperties(objString) {
          let obj = JSON.parse(objString);
          let sortedObj = {};
          Object.keys(obj)
            .sort()
            .forEach((key) => {
              sortedObj[key] = obj[key];
            });
          return JSON.stringify(sortedObj);
  
       
        }