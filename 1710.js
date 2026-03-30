/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    // Шаг 1: Сортируем коробки по убыванию количества единиц в каждой коробке
    // Чтобы сначала брать самые "ценные" коробки
    boxTypes.sort((a, b) => b[1] - a[1]);

    let totalUnits = 0;
    let remainingSpace = truckSize;

    // Шаг 2: Проходим по всем типам коробок, пока есть место в грузовике
    for (let i = 0; i < boxTypes.length && remainingSpace > 0; i++) {
        const [boxCount, unitsPerBox] = boxTypes[i];

        // Шаг 3: Определяем, сколько коробок этого типа мы можем взять
        // (все доступные или столько, сколько осталось места)
        const boxesToTake = Math.min(boxCount, remainingSpace);

        // Шаг 4: Добавляем единицы товара от взятых коробок
        totalUnits += boxesToTake * unitsPerBox;

        // Шаг 5: Уменьшаем оставшееся место в грузовике
        remainingSpace -= boxesToTake;
    }

    return totalUnits;
};