let arr_obj = [
    {
        Name : "Levon",
        Age : 18,
        Friends : [
            {
                Name : "Varsdishax",
                Age : 167
            },
            {
                Name : "Baxdasar",
                Age : 12
            },
            {
                Name : "Pablo",
                Age : -1
            },
        ]
    },
    {
        Name : "Manvel",
        Age : 16,
        Friends : [
            {
                Name : "Hayko",
                Age : 16
            },
            {
                Name : "Xasbula",
                Age : 16
            }
        ]
    },
    {
        Name : "Alex",
        Age : 16,
        Friends : [

        ]
    }
]

let k = arr_obj.filter(res => res.Friends.length === 0)
let l = arr_obj.filter(res => res.Friends.length > 0)
k.Friends = l[0].Friends
console.log(k)