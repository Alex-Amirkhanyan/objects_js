let obj = [
    {
        Name : "Alex",
        Status : true,
        Login : "qwerty",
        Password : "123456"
    },
    {
        Name : "Levon",
        Status : true,
        Login : "abcd",
        Password : "000000"
    },
    {
        Name : "Hayko",
        Status : true,
        Login : "asdfg",
        Password : "aaaa"
    },
    {
        Name : "Manvel",
        Status : false,
        Login : "zxcv",
        Password : "oleole"
    }
]

function insert() {
    let a = prompt("Dzer anun@") 
    check_name(a)
}
function check_name(arg) {
    for(let i = 0; i < obj.length; i++) {
        if(obj[i].Name === arg) {
            check_status(obj[i])
        }
    }
}
function check_status(arg1) {
    if(arg1.Status === true) {
        log_in(arg1)
    }else {
        alert("Dzer mutq@ algervac e")
    }
}
function log_in(arg2) {
    let Log = prompt("Dzer login@")
    let Pass = prompt("Dzer parol@")
    if(Log === arg2.Login && Pass === arg2.Password) {
        alert("Access gained.")
    }else {
        alert("Sxal eq mutqagrel tvyalner@")
    }
}
insert()