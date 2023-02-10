const fs = require('fs')

const findTemp = (curr_unit, curr_temp, new_unit) => {

    var new_temp = 0;
    var value = 0;
    
    if (curr_unit == "F") {
        if (new_unit == "C"){
            new_temp = (5/9)*(curr_temp - 32)
        }else if (new_unit == "K") {
            new_temp = curr_temp + 457.87
        }
    }else if (curr_unit == "K"){
        if (new_unit == "C") {
            new_temp = curr_temp - 273.15
        }else if (new_unit == "F") {
            new_temp = curr_temp + 457.87
        }
    }else if (curr_unit == "C"){
        if (new_unit == "F"){
            new_temp = (9/5)*(curr_temp + 32)
        }else if (new_unit == "K"){
            new_temp = curr_temp + 273.15
        }
    };
    value = new_temp.toFixed(2);
    fs.writeFile('temp.txt', value, err => {
        if (err) {console.error(err)}
    });
    console.log(value);
}

fs.readFile('temp.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    curr_unit = obj.curr_unit 
    curr_temp = obj.curr_temp 
    new_unit = obj.new_unit 
    value = findTemp(curr_unit, curr_temp, new_unit);
});



