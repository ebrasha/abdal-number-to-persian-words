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


!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AbdalNumberToWords = t() : e.AbdalNumberToWords = t()
}(self, (() => (() => {
    "use strict";
    var e = {
        d: (t, o) => {
            for (var r in o) e.o(o, r) && !e.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: o[r]})
        }, o: (e, t) => Object.prototype.hasOwnProperty.call(e, t), r: e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }
    }, t = {};

    function o(e) {
        const t = parseInt(e, 10),
            o = [["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"], ["ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده"], ["", "", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"], ["", "یکصد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"]];
        if (0 === t) return "";
        const r = Math.floor(t / 100), n = t % 100, i = Math.floor(n / 10), s = n % 10;
        let u = [];
        return r > 0 && u.push(o[3][r]), n >= 10 && n <= 19 ? u.push(o[1][n - 10]) : (i > 0 && u.push(o[2][i]), s > 0 && u.push(o[0][s])), u.join(" و ")
    }

    function r(e, t) {
        if ("number" == typeof e && (e = e.toString()), !(e = e.replace(/,/g, "").replace(/[^0-9.-]/g, "")) || isNaN(e)) return "صفر";
        const r = e.startsWith("-");
        r && (e = e.slice(1));
        const [n, i] = e.split("."),
            s = [  "", "هزار", "میلیون", "میلیارد", "بیلیون", "بیلیارد",
                "تریلیون", "تریلیارد", "کوآدریلیون", "کادریلیارد",
                "کوینتیلیون", "کوانتیلیارد", "سکستیلیون", "سکستیلیارد",
                "سپتیلیون", "سپتیلیارد", "اکتیلیون", "اکتیلیارد",
                "نانیلیون", "نانیلیارد", "دسیلیون", "دسیلیارد",
                "آندسیلیون", "آندسیلیارد", "دودسیلیون", "دودسیلیارد",
                "تریدسیلیون", "تریدسیلیارد", "کوادردسیلیون", "کوادردسیلیارد",
                "کویندسیلیون", "کویندسیلیارد", "سیدسیلیون", "سیدسیلیارد"],
            u = function (e) {
                for (e = e.toString(); e.length % 3 != 0;) e = "0" + e;
                return e.match(/.{1,3}/g)
            }(n || "0");
        return (r ? "منفی " : "") + u.map(((e, t) => {
            const r = u.length - 1 - t, n = o(e);
            return n ? n + (s[r] ? " " + s[r] : "") : ""
        })).filter(Boolean).join(" و ") + (i ? " ممیز " + i.split("").map((e => 0 === parseInt(e) ? "صفر" : o(e))).join(" و ") : "") + (t ? ` ${t}` : "")
    }

    return e.r(t), e.d(t, {numberToWords: () => r}), t
})()));