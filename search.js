// ? find character from string using includes()
const lyrics = 'tumi bondhu kala paKhi ami jeno kiiiiiiiiiiiiiiii';
const searchString = 'paKhi';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);
console.log(doesExistOneLine);

// ? find  IndexOf from string
console.log(lyrics.indexOf('paKhi'));


if(lyrics.indexOf('kaala') !== -1){
    console.log('exist');
}
else{
    console.log('dosent exist');
}

// * startsWith
// console.log(lyrics.startsWith('tumi'));
// * endsWith
// console.log(lyrics.endsWith('kiiiiiiiiiiiiiiii'))

const fileName = 'work.pdf';
console.log(fileName.endsWith('pdf'));
