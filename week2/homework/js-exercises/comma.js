let myString = 'hello,this,is,a,difficult,to,read,sentence';

for (let i = 0; i <= myString.length; i++) {
    myString = myString.replace(',', ' ')
};

console.log (myString);