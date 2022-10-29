let LCD = document.getElementById("LCD");

function display(entry) {
    LCD.value += entry;
}
function assign() {
    try{
        LCD.value = eval(LCD.value);
    }
    catch(err) {
        alert('Invalid Input');
    }
}
function allClear() {
    LCD.value = "";
}
function remove() {
    LCD.value = LCD.value.slice(0, -1);
}