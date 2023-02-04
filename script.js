function run() {
    var ascii_codes = {};
    var i;
    var j = 65;

    // Assigning ASCII values to uppercase alphabets
    for (i = 1; i <= 26; i++) {
        ascii_codes[i] = String.fromCharCode(j);
        j++;
    }

    // Assigning ASCII values to lowercase alphabets
    j = 97;
    for (i = 27; i <= 52; i++) {
        ascii_codes[i] = String.fromCharCode(j);
        j++;
    }

    // Assigning ASCII values to numbers
    j = 48;
    for (i = 53; i <= 62; i++) {
        ascii_codes[i] = String.fromCharCode(j);
        j++;
    }

    // Assigning ASCII values to symbols
    ascii_codes[63] = '!';
    ascii_codes[64] = '"';
    ascii_codes[65] = '#';
    ascii_codes[66] = '$';
    ascii_codes[67] = '%';
    ascii_codes[68] = '&';
    ascii_codes[69] = "'";
    ascii_codes[70] = '(';
    ascii_codes[71] = ')';
    ascii_codes[72] = '*';
    ascii_codes[73] = '+';
    ascii_codes[74] = ',';
    ascii_codes[75] = '-';
    ascii_codes[76] = '.';
    ascii_codes[77] = '/';
    ascii_codes[78] = ':';
    ascii_codes[79] = ';';
    ascii_codes[80] = '<';
    ascii_codes[81] = '=';
    ascii_codes[82] = '>';
    ascii_codes[83] = '?';
    ascii_codes[84] = '@';
    ascii_codes[85] = '[';
    ascii_codes[86] = '\\';
    ascii_codes[87] = ']';
    ascii_codes[88] = '^';
    ascii_codes[89] = '_';
    ascii_codes[90] = '`';
    ascii_codes[91] = '{';
    ascii_codes[92] = '|';
    ascii_codes[93] = '}';
    ascii_codes[94] = '~';

    // Using the assigned values to convert the input value
    var inpt = document.getElementById("inp");
    var res = document.getElementById("res");
    res.innerHTML = ascii_codes[inpt.value];
}