// const user_data = [
//     {
//         Login : "asdasd",
//         Password : "123456"
//     },
//     {
//         Login : "zxczxc",
//         Password : "123456"
//     },
//     {
//         Login : "qwerty",
//         Password : "123456"
//     }
// ]
// function insert() {
//     let a = prompt("Dzer Login@")
//     let b = prompt("Dzer parol@")
//     check_length(a, b)
// }
// function check_length(arg1, arg2) {
//     let aa = arg1.split("")
//     let bb = arg2.split("")
//     if(aa.length && bb.length > 5) {
//         check_inserts(arg1, arg2)
//     }else {
//         console.log("Dashteric meki nisheri qanak@ chi bavararum.")
//     }
// }
// function check_inserts(arg3, arg4) {
//     let c = user_data.find(res => res.Login === arg3 && res.Password ===  arg4)
//     if(c) {
//         alert("Duq mutq gorceciq.")
//     }else {
//         alert("Sxal Login kam Parol.")
//     }
// }
// insert()













const user_data = [
    {
        Login : "asdasd",
        Password : "123456"
    },
    {
        Login : "zxczxc",
        Password : "123456"
    },
    {
        Login : "qwerty",
        Password : "123456"
    }
]
let span = document.getElementById("false_data")
span.style.color = "red"

function insert() {
    let a = document.getElementById("log").value
    let b = document.getElementById("pas").value
    console.log(a)
    console.log(b)
    if(a === "" && b === "") {
        span.innerHTML = "*Dashteric voreve mek@ datark e"
    }else {
        check_length(a, b)
    }
}
function check_length(arg1, arg2) {
    let aa = arg1.split("")
    let bb = arg2.split("")
    if(aa.length && bb.length > 5) {
        check_inserts(arg1, arg2)
    }else{
        span.innerHTML = "*Dashteric mekum nermucvac nisheri qanak@ chi bavararum."
    }
}
function check_inserts(arg3, arg4) {
    let c = user_data.find(res => res.Login === arg3 && res.Password ===  arg4)
    if(c) {
        alert("Duq mutq gorceciq.")
    }else {
        span.innerHTML = "*Sxal Login kam Parol."
    }
}