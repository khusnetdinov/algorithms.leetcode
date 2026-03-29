/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let count5 = 0;
    let count10 = 0;

    for (let bill of bills) {
        if (bill === 5) {
            count5++;
        } else if (bill === 10) {
            if (count5 > 0) {
                count5--;
                count10++;
            } else {
                return false;
            }
        } else if (bill === 20) {
            // Сначала пытаемся дать сдачу 10 + 5
            if (count10 > 0 && count5 > 0) {
                count10--;
                count5--;
            }
            // Иначе пытаемся дать три купюры по 5
            else if (count5 >= 3) {
                count5 -= 3;
            }
            else {
                return false;
            }
        }
    }

    return true;
};