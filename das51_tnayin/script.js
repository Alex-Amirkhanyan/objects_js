let arr_obj = []
let obj = new Object()
let span = document.getElementById("zgushacum")
span.style.color = "red"

let child_1 = document.getElementById("child_1")
let child2 = document.getElementById("child_2")
child_2.style.visibility = "hidden";

function add_newdata() {
    let newlog = document.getElementById("log").value
    let newpass = document.getElementById("pass").value
    if(newlog === "" && newpass === "") {
        span.innerHTML = "Dashter@ cheq lracrel"
    }else if (newlog === "" || newpass === "") {
        span.innerHTML = "Dashteric mek@ cheq lracrel"
    }else {
        check_newdata_length(newlog, newpass)
    }
    
}
function check_newdata_length(arg1, arg2) {
    let arr_arg1 = arg1.split("")
    let arr_arg2 = arg2.split("")
    if(arr_arg1.length < 5 && arr_arg2.length < 5) {
        span.innerHTML = "Dashter@ qich eq lracrel"
    }else if (arr_arg1.length < 5 || arr_arg2.length < 5) {
        span.innerHTML = "Dashteric mek@ qich eq lracrel"
    }else {
        obj.login = arg1
        obj.password = arg2
        arr_obj.push(obj)
        span.style.visibility = "hidden"
        show_and_hide()
    }
}
function show_and_hide() {
    child_1.style.visibility = "hidden"
    child_2.style.visibility = "visible"
}
function login() {
    let log = document.getElementById("log2").value
    let pass = document.getElementById("pass2").value
    let c = arr_obj.find(res => res.login === log && res.password === pass)
    if(c) {
        alert("Duq mutq gorceciq")
    }else {
        span.innerHTML = "Sxal login kam parol"
        span.style.visibility = "visible"
    }
}