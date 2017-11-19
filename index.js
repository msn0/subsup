'use strict';

const map = {
    sup: {
        '0': '⁰',
        '1': '¹',
        '2': '²',
        '3': '³',
        '4': '⁴',
        '5': '⁵',
        '6': '⁶',
        '7': '⁷',
        '8': '⁸',
        '9': '⁹',
        '+': '⁺',
        '-': '⁻',
        '=': '⁼',
        '(': '⁽',
        ')': '⁾',
        'n': 'ⁿ',
        'i': 'ⁱ'
    },
    sub: {
        '0': '₀',
        '1': '₁',
        '2': '₂',
        '3': '₃',
        '4': '₄',
        '5': '₅',
        '6': '₆',
        '7': '₇',
        '8': '₈',
        '9': '₉',
        '+': '₊',
        '-': '₋',
        '=': '₌',
        '(': '₍',
        ')': '₎'
    }
};

function parse(input) {
    return (input + '').split('');
}

function toSup(input) {
    return map.sup[input];
}

module.exports.sup = function (input) {
    return parse(input).map(toSup).join('');
};

module.exports.sub = function (input) {
    input = (input + '').split('');
    return input.map(i => map.sub[i]).join('');
};
