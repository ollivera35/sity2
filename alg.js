function alg() {

    var s = parseFloat(document.getElementById("S").value);
    var r = parseFloat(document.getElementById("R").value);
    var k = parseFloat(document.getElementById("K").value);
    var x = "error";

    if (r*2 + k*2 <= s**(1/2)) {
        x = "Можно разместить сцену и проход в квадратном зале.";
    }
    else {
        x = "Нельзя разместить сцену и проход в квадратном зале.";
    }
    document.getElementById("ans").innerHTML = x;
}