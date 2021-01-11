// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает
// параметром произвольную строку (в строке будут только слова
// и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
    let arr = string.split(" ");                     //  строку в массив
    let longWord ='';
    for (let i = 0; i < arr.length; i+=1) {
      if (arr[i].length > longWord.length) {
           longWord = arr[i]; 
      }
    }
    return longWord;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'