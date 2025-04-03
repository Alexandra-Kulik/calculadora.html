function appendValue(value) {
    document.getElementById('screen').value += value;
}
function clearScreen() {
    document.getElementById('screen').value = '';
}
function calculate() {
    try {
        document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } catch (e) {
        alert('Erro na expressão!');
    }
}
