/**
 * Name:  Abdal Number to Persian Words
 * Author: Ebrahim Shafiei (EbraSha)
 * License: MIT
 * Git: https://github.com/ebrasha/abdal-number-to-persian-words
 * Copyright: 2025 Ebrahim Shafiei
 * Version: 1.6
 * Email: Prof.Shafiei@Gmail.com
 * "Coding is an engaging and beloved hobby for me. I passionately and insatiably pursue knowledge in cybersecurity and programming." — Ebrahim Shafiei (EbraSha)
 * reference: https://fa.wikipedia.org/wiki/%D9%86%D8%A7%D9%85_%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF_%D8%A8%D8%B2%D8%B1%DA%AF
 */


import { prepareNumber, tinyNumToWord } from "./utils.js";

export function numberToWords(num, unit) {
    if (typeof num === "number") num = num.toString();
    num = num.replace(/,/g, "").replace(/[^0-9.-]/g, "");

    if (!num || isNaN(num)) return "صفر";

    const isNegative = num.startsWith("-");
    if (isNegative) num = num.slice(1);

    const [integerPart, decimalPart] = num.split(".");
    const scales = [
        "", "هزار", "میلیون", "میلیارد", "بیلیون", "بیلیارد",
        "تریلیون", "تریلیارد", "کوآدریلیون", "کادریلیارد",
        "کوینتیلیون", "کوانتیلیارد", "سکستیلیون", "سکستیلیارد",
        "سپتیلیون", "سپتیلیارد", "اکتیلیون", "اکتیلیارد",
        "نانیلیون", "نانیلیارد", "دسیلیون", "دسیلیارد",
        "آندسیلیون", "آندسیلیارد", "دودسیلیون", "دودسیلیارد",
        "تریدسیلیون", "تریدسیلیارد", "کوادردسیلیون", "کوادردسیلیارد",
        "کویندسیلیون", "کویندسیلیارد", "سیدسیلیون", "سیدسیلیارد"
    ];

    const chunks = prepareNumber(integerPart || "0");
    const words = chunks.map((chunk, index) => {
        const scaleIndex = chunks.length - 1 - index;
        const chunkWords = tinyNumToWord(chunk);
        if (chunkWords) return chunkWords + (scales[scaleIndex] ? " " + scales[scaleIndex] : "");
        return "";
    }).filter(Boolean);

    const integerWords = words.join(" و ");
    const decimalWords = decimalPart ? " ممیز " + decimalPart.split("").map(d => {
        const digit = parseInt(d);
        return digit === 0 ? "صفر" : tinyNumToWord(d);
    }).join(" و ") : "";

    return (isNegative ? "منفی " : "") + integerWords + decimalWords + (unit ? ` ${unit}` : "");
}
