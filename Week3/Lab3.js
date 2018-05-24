function extractCurrencyValue (str){
    return str.slice(1,str.length);
}

console.log(extractCurrencyValue("$124"));

function ucFirst (str){
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

console.log(ucFirst("hello"));

function camelize (str){
    var strs = str.split('-');
    var result = "";
    for (var index = 0; index < strs.length; index++) {
        if(index != 0){
        result += ucFirst(strs[index]);
        }else{
            result +=strs[index];
        }
    }
    return result;
}

console.log(camelize("-webkit-transition"));

