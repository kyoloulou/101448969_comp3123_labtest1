const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(mixedArray)) {
            reject("This is nit an array");
        } else {
            const filteredArray = mixedArray
                .filter(item => typeof item === "string")
                .map(item => item.toLowerCase());
            resolve(filteredArray);
        }
    });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
console.log(lowerCaseWords(mixedArray))