function udvozles() {
    let szoveg;
    let ora = new Date().getHours();

    if (ora < 3) {
        szoveg = "Jó éjszakát!";
    } else if (ora < 6) {
        szoveg = "Szép álmokat!";
    } else if (ora < 9) {
        szoveg = "Jó reggelt!";
    } else if (ora < 12) {
        szoveg = "Jó napot!";
    } else if (ora < 13) {
        szoveg = "Jó étvágyat!";
    } else if (ora < 18) {
        szoveg = "Kellemes napot!";
    } else  {
        szoveg = "Jó estét!";
    }

    document.getElementById("udv").innerHTML = szoveg;
    document.getElementById("ido").innerHTML = ora + " óra van";
    document.getElementById("udv").innerHTML = classlist.add("mystyle");
    document.getElementById("ido").innerHTML = classlist.add("mystyle", "mystyle2");

    if (ora >5 && ora <= 21) {
        document.body.style.backgroundColor = "yellow";
    } else document.body.style.backgroundColor = "darkblue"
}
