/**
 * Name:  Abdal Number to Persian Words
 * Author: Ebrahim Shafiei (EbraSha)
 * License: MIT
 * Git: https://github.com/ebrasha/abdal-number-to-persian-words
 * Copyright: 2025 Ebrahim Shafiei
 * Version: 1.5
 * Email: Prof.Shafiei@Gmail.com
 * "Coding is an engaging and beloved hobby for me. I passionately and insatiably pursue knowledge in cybersecurity and programming." — Ebrahim Shafiei (EbraSha)
 * reference: https://fa.wikipedia.org/wiki/%D9%86%D8%A7%D9%85_%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF_%D8%A8%D8%B2%D8%B1%DA%AF
 */


// Utility functions for Abdal Number to Persian Words Library

export function prepareNumber(num) {
    num = num.toString();
    while (num.length % 3 !== 0) {
        num = "0" + num;
    }
    return num.match(/.{1,3}/g);
}

export function tinyNumToWord(chunk) {
    const num = parseInt(chunk, 10);
    const letters = [
        ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"],
        ["ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده"],
        ["", "", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"],
        ["", "یکصد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"]
    ];
    if (num === 0) return "";
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;
    const tens = Math.floor(remainder / 10);
    const ones = remainder % 10;

    let words = [];
    if (hundreds > 0) words.push(letters[3][hundreds]);
    if (remainder >= 10 && remainder <= 19) {
        words.push(letters[1][remainder - 10]);
    } else {
        if (tens > 0) words.push(letters[2][tens]);
        if (ones > 0) words.push(letters[0][ones]);
    }
    return words.join(" و ");
}
