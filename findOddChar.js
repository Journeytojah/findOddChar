/**
 * Returns characters in a word or phrase that occur an odd number of times.
 * 
 * Performs a search on a lowercased and whitespace-stripped string in order to
 * find whether a character in it has occurred an odd number of times and will
 * only return those characters that did. Will return "Not Found" if all characters
 * have even occurrences.
 * 
 * @param {String} str The word or phrase to perform the search on. 
 * @returns {Object | String} Object with chars and their odd counts or "Not Found".
 * 
 * Example:
 * 
 * ```js
 * findOdd('Coco');
 * findOdd('Banana');
 * >>> Not Found
 * >>> { b: 1, a: 3 }
 * ```
 */
const findOddChar = (str) => {
    // Create an array from the lowercased string
    // remove any and all whitespace as we do not want to count that.
    const chars = Array.from(str.replace(' ', '').toLowerCase());

    let odds = {};

    // Place a character in the `odds` ojects and
    // increment the count if it already existed, otherwise
    // put it in and set count to 1.
    chars.forEach(char => {
        if (char in odds) {
            odds[char]++
        } else {
            odds[char] = 1
        }
    });

    // Iterate over the `odds` obbject and delete any
    // even number since we do not wish to keep those.
    Object.entries(odds).forEach((entry) => {
        if (entry[1] % 2 === 0) {
            delete odds[entry[0]]
        }
    })

    // If no odd entries, return "Not Found"
    return Object.keys(odds).length === 0 ?
        "Not Found" :
        odds
};

const oddChar1 = findOddChar('abb');
console.log(oddChar1);

const oddChar2 = findOddChar('abba');
console.log(oddChar2);

const oddChar3 = findOddChar('7c7@@@c7@');
console.log(oddChar3);

const oddChar4 = findOddChar('abbc');
console.log(oddChar4);