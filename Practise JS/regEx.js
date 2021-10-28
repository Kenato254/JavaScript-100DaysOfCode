function func(pattern='', str='', repl='') {
    if (pattern) {
        let find_name  = pattern.replace(str, repl);
        return find_name;
    } else {
        let str = "My name is Kennedy Gitonga";
        let find_name = str.search(/kennedy/i); // 'i' perform case-insensitive matching
        return find_name;
    }
}
// console.log(findName("This is why they called him Morris, because he's a cool dude.", 'Morris', 'Kennedy'));
function func2() {
let text = 'Is this all there is';
    const g_find_all = (pattern) => pattern.match(/is/g); // Searches entire string instead of stopping at first occurrence
    console.log(g_find_all(text));
}

function func3() {
    let text = "This is why \nthey called him Kennedy, \nbecause he's a cool dude.";
    let result = text.match(/is/m); //Span match muiltiline
    console.log(result);
}

// Brackets
let text = "This is why they called him Kennedy, because he's a cool dude. Day 10.";
function func4() {
    let result = text.match(/[eio]/g); // Find any character in the square bracket
    return result;
}
function func5(){
    let result = text.match(/(a|b)/); // Find any of the alternatives seperated by |
    return result;
}

// Metacharacters
function func6(){
    let result = text.match(/\d/); // Find a digit
    return result;
}
function func7(){
    let result = text.match(/\s/); // Find a white space
    return result;
}
function func8(){
    let result = text.match(/\bKennedy/); // Find a match at the beginning or end of a word
    let result2 = text.match(/cool\b/); // Find a match at the beginning or end of a word
    return [result, result2];
}

// Quantifiers
function func9() {
    let result = text.match(/n+/); // Matches a string with atleast one  occurence of 'n'
    let result2 = text.match(/he*/); // Matches a string with zero or more occurence of  'e'
    let result3 = text.match(/du?/); // Matches a string with zero or one occurence of 'o'
    return [result, result2, result3];
}

// RegEx Objects & test()
function func10() {
    let pattern = /ken/i;
    return pattern.test('His is called Kennedy'); // Searches a string for a pattern, Return True or False depending on match.
}

// RegEx Objects & exec()
function func11() {
    return /cool/i.exec('Yeah he is a COOL dude.'); // Searches a string for a pattern, Return found text or null depending on match.
}
console.log(func11());
