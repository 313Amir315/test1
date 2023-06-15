function ageToBirthyear(age) {
    var current =new Date().getFullYear();
    var birthyear = currentyear - age;
    return birthyear;
}



var result = ageToBirthyear(27);
if (result === new Date().getFullYear() - 27){
    console.log('Test 1 successful');
} else {
    console.log('Test2 faild');
}