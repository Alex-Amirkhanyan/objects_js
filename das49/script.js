// let user = [
//     {
//         id : 1,
//         Name : "Manvel",
//         Login : "M123",
//         Psw : "m123",
//         friends : [2, 3]
//     },
//     {
//         id : 2,
//         Name : "Hayko",
//         Login : "H123",
//         Psw : "h123",
//         friends : [1]
//     },
//     {
//         id : 3,
//         Name : "Muxi",
//         Login : "Mu123",
//         Psw : "Mu123",
//         friends : [1]
//     }
// ]
 
// const unique_obj = user.find(res1 => res1.Login === "Mu123" && res1.Psw === "Mu123")
// const people = unique_obj.friends

// let k = people.map(res2 => {
//     return user.filter(us => {
//         return us.id === res2
//     })
// })
// k.map(res3 => {
//     document.write(res3[0].Name + "<br>")
// })