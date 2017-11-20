import test from 'ava';
import { sup, sub } from './';

test('sup', t => {
    t.deepEqual(
        sup('0123456789+-=()ni'),
        '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿⁱ'
    );
});

test('sub', t => {
    t.deepEqual(
        sub('0123456789+-=()'),
        '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎'
    );
});
