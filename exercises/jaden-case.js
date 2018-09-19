'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(mot) {
    mot = mot.toUpperCase();
    return mot;
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase("mot"), "MOT")

//assert.fail("c'est pas bon")
// End of tests */
