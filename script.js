    /* ДЗ-№8 */

let arr = []
for (let i = 0; i < Infinity; i++) {
    let data = prompt('Введите команду');
    let units = data.split(', ');
    
    if (units[0] == 'add') {
        arr.push(units[1])
        console.log(arr);
    } else if (units[0] == 'del') {
        arr.splice(units[1], units[1])
        console.log(arr); 
    } else if (units [0] == 'stop') {
        break; 
    }
}

console.log(arr);
