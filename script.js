function calcPrice() {
    let defPrice = Number(document.getElementById("input-price").value);
    // Рассчитываем и выводим цены
    // Цена + 20 %
    document.getElementById('pricePlus20').innerHTML = `Цена + 20 % = ${defPrice * 1.2} Р`
    // Начислится баллов
    document.getElementById('bonusCount').innerHTML = `Начислится баллов = ${defPrice * 0.003} Б`
    // Наша наценка
    document.getElementById('priceMargin').innerHTML = `Наша наценка = ${getMargin()} Р`
    // Цена + наша наценка
    document.getElementById('resultPrice').innerHTML = `Цена + наша наценка = ${defPrice + getMargin()} Р`
    // Цена + наценка + 20 %
    document.getElementById('resultPricePlus20').innerHTML = `Цена + наценка + 20 % = ${(defPrice + getMargin()) * 1.2} Р`
}


const getMargin = () => {
    let discontPrice = Number(document.getElementById("input-price").value);
    let margin = 0

    if (0 <= discontPrice && discontPrice < 21000) {
        margin = 3000
    } else if (21000 <= discontPrice && discontPrice < 51000) {
        margin = 4000
    } else if (51000 <= discontPrice && discontPrice < 81000) {
        margin = 5000
    } else if (81000 <= discontPrice && discontPrice < 101000) {
        margin = 6000
    } else if (101000 <= discontPrice && discontPrice < 131000) {
        margin = 7000
    } else if (131000 <= discontPrice && discontPrice < 151000) {
        margin = 8000
    } else if (151000 <= discontPrice && discontPrice < 181000) {
        margin = 10000
    } else if (181000 <= discontPrice && discontPrice < 251000) {
        margin = 14000
    } else if (251000 <= discontPrice && discontPrice < 351000) {
        margin = 16000
    } else if (351000 <= discontPrice) {
        margin = 20000
    }

    return margin

}
