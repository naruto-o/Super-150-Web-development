let s = "this is a string and is an example tt";
for (let index = 0; index < s.length-1; index++) {
        if(s[index] == 'i' && s[index+1] == 's'){
            alert(index);
        }
}
