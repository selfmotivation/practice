$(function () {
    
    // СЕЛЕКТОРЫ

    // Базовые селекторы (#id, tagName, .class)
    // $('p').css('border', 'solid 3px red'); // По тегу
    // $('.blue').css('border', 'solid 3px red'); // По классу
    // $('#id').css('border', 'solid 3px red'); // По идентификатору
    // $('p.blue').css('border', 'solid 3px red'); // Сочетание селекторов

    // Селекторы взаимодействия (parent, child, +, ~ и т.д.)
    // $('body h2').css('border', 'solid 3px red'); // Элемент в элементе
    // $('h2 + p').css('border', 'solid 3px red'); // Следующий p после h2
    // $('h2 ~ p').css('border', 'solid 3px red'); // Все p после h2
    // $('h2').parent().css('border', 'solid 3px red'); // Родитель выбранного элемента

    // Простые фильтры (:first, :last, :even, :odd, eq и т.д.)
    // $('p:last').css('border', 'solid 3px red'); // Выбор элемента по счету
    // $('p:even').css('border', 'solid 3px red'); // Выбор элемента по счету
    // $('p:eq(0)').css('border', 'solid 3px red'); // Выбор элемента по счету

    // Фильтры по содержимому (:has, :parent, :empty и т.д.)
    // $('h2:has(span)').css('border', 'solid 3px red'); // Элемент содержит в себе...
    // $('.box:parent').css('border', 'solid 3px red'); // Элемент является родителем других элементов
    // $('.box:empty').css('border', 'solid 3px red'); // Элемент не содержит других элементов

    // // Фильтры по атрибутам ([name ~= value] и т.д.)
    // $('a[href="https://google.com"]').css('border', 'solid 3px red'); // Элемент содержит атрибут
    // $('a[href!="https://google.com"]').css('border', 'solid 3px red'); // Элемент содержит любой, но не указанный атрибут
    // $('a[href^="https"]').css('border', 'solid 3px red'); // Атрибут элемента начинается с...
    // $('a[href$=".ru"]').css('border', 'solid 3px red'); // Атрибут элемента заканчивается на...
    // $('a[href*="https"]').css('border', 'solid 3px red'); // Атрибут элемента содержит в себе...

    
});