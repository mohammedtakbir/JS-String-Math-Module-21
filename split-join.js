const lyrics = 'tumi bondhu kala paKhi ami jeno ki.bosontokale tomay bolte parini.sada sada kala';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.')
const characters = lyrics.split('');
// console.log(characters);

const partial = lyrics.slice(0, 4);
// console.log(partial);

// ? join
 const line =[
    'tumi bondhu kala paKhi ami jeno ki',
    'bosontokale tomay bolte parini',
    'sada sada kala'
  ]
//   console.log(line.join('. '));

// ? substring()

//* substring(indexStart)
//* substring(indexStart, indexEnd)

const str = 'firefox';
console.log(str.substring(1, 4));
console.log(str.substring(4));
