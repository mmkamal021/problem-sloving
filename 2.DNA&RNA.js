/*
The main information storage molecule in biological systems is deoxyribonucleic acid, or DNA. Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T') are the four nucleic acid bases that make up this compound.
In cells, ribonucleic acid, or RNA, serves as the main messenger molecule. RNA's chemical makeup and lack of thymine set it apart slightly from DNA in terms of structure. In RNA, uracil ('U') replaces thymine as a nucleic acid.
Make a function that converts an input DNA string to RNA.
For instance:
GCAT becomes "GCAU"
Any length can be used for the input string, including empty strings. All input is certain to be accurate because each string will only ever contain the letters "G," "C," "A," and/or "T."
*/

// Note this
const source = 'abcdefabcdef'
const str1 = 'abc',
  str2 = 'xyz'
const reg1 = /abc/g,
  reg2 = 'xyz'

//Case 1 : When we want to replace a string by another
console.log(source.split(str1).join(str2))
console.log(source.replace(new RegExp(str1, 'g'), str2))
//versus
console.log(source.replaceAll(str1, str2))

//Case 2 : When we want to use a regular expression
console.log(source.replace(reg1, reg2))
//versus
console.log(source.replaceAll(reg1, reg2))

//Result = "xyzdefxyzdef"
/*
Note: When using a regexp you have to set the global ("g") flag; otherwise, it will throw a TypeError: "replaceAll must be called with a global RegExp".
*/

// Here is the solve 1
function DNAtoRNA(dna) {
  return dna.replace('T', 'U')
}

// Here is the solve 2
const DNAtoRNA = (dna) => dna.replace(/T/g, 'U')

// Here is the solve 3
function DNAtoRNA(dna) {
  return dna.split('T').join('U')
}

// Here is the solve 4
function DNAtoRNA(dna) {
  return dna.replace(/t/gi, 'U') // gi is the  regular expression global flag
}
