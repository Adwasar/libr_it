// leftMenuCountent
const leftMenu = document.querySelector('.leftMenu');
const leftMenuCountentDeep1 = document.createElement('div');

const javaScript = `JavaScript.html" class="a">JavaScript</a>`,
      java = `Java.html" class="a">Java</a>`,
      piton = `Piton.html" class="a">Piton</a>`,
      php = `PHP.html" class="a">PHP</a>`,
      cCPlusPlus = `C_C++.html" class="a">C/C++</a>`,
      cSharp = `C(sharp).html" class="a">C#</a>`;

if (leftMenu.classList.contains('deep1')) {
    leftMenuCountentDeep1.innerHTML = `
    <h3>Специфика</h3>
        <a href="others/${javaScript}
        <a href="others/${java}
        <a href="others/${piton}
        <a href="others/${php}
        <a href="others/${cCPlusPlus}
        <a href="others/${cSharp}
    `;

    leftMenu.append(leftMenuCountentDeep1);
} else if (leftMenu.classList.contains('deep2')) {
    leftMenuCountentDeep1.innerHTML = `
    <h3>Специфика</h3>
        <a href="${javaScript}
        <a href="${java}
        <a href="${piton}
        <a href="${php}
        <a href="${cCPlusPlus}
        <a href="${cSharp}
    `;
    
    leftMenu.append(leftMenuCountentDeep1);
} else if (leftMenu.classList.contains('deep3')) {
    leftMenuCountentDeep1.innerHTML = `
    <h3>Специфика</h3>
        <a href="../../${javaScript}
        <a href="../../${java}
        <a href="../../${piton}
        <a href="../../${php}
        <a href="../../${cCPlusPlus}
        <a href="../../${cSharp}
    `;

    leftMenu.append(leftMenuCountentDeep1);
}

// Присвоение ноера, для каждого елемента таблицы
const listItems = document.querySelectorAll("td a");

listItems.forEach((item, i) => {
    item.innerHTML = `${i + 1}. ${item.innerHTML}`;
});

// Шаблоны для списков
const orderList = document.querySelectorAll("li");

const unOrderList = document.querySelector("ul");

function checkUnOrderList () {
    if (unOrderList) {
        orderList[0].innerHTML = `${'<b>Название книги: </b>'} ${orderList[0].innerHTML}`;
        orderList[1].innerHTML = `${'<b>Автор: </b>'} ${orderList[1].innerHTML}`;
        orderList[2].innerHTML = `${'<b>Издание: </b>'} ${orderList[2].innerHTML} г.`;
    }
}
checkUnOrderList ();

// бургер 
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    leftMenu.classList.toggle('active');
})