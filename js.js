// let name = 'Alex'
// let money = 10000
// let account = 7777

// let s = `молодой человек не найден`
// let ans = prompt(`как величать вас молодой человек`)
// if (ans.trim() == `Alex`) {
//     let ans_tw = prompt(`пароль`)
//     if (ans_tw == account) {
//         let ans_three = prompt(`сколько обналичить`)
//         if (ans_three <= money) {
//             alert(`да ты при бапках`)
//             let a = confirm(`показать зезультат`)
//             if (a === true) {
//                 let d = money - ans_three 
//                 let g = money - d
//                 alert(d )
//                 alert(g )

//             }
//         } else {
//             alert(`молодому человеку не хвотат денег помогите ему `)
//         }
//     } else {
//         alert(s)
//     }
// } else {
//     alert(s)
// }



let name = prompt(`name`)
if (name.trim().toLowerCase().toUpperCase().charAt(0) == `A`) {
    let age = +prompt(`age`)
    if (age >= 20 && age <= 40) {
        let money = +prompt(`money`)
        if (money >= 100) {
            let pl = prompt(`сколько людей хотят зайти `)
            if (pl <= 8) {
                alert(`welcome  nightclub`)
            } else {
                alert(`вас много `)
            }

        } else {
            alert(`денег у тебя нету `)
        }

    } else {
        alert(`не ты не подходишь `)
    }
} else {
    alert(`имя у тебя плохое`)
}












































