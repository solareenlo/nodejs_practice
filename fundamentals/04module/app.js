console.log('Starting app.js');

// notes.jsを呼び込む
const notes = require('./notes.js');

var res = notes.addNote();
var add = notes.add(3.1, 4);

// notes.jsで設定したageを表示
console.log(notes.age);
// notes.jsにあるaddNote()関数を実行
notes.addNote();
// addNote()関数の戻り値を表示
console.log(res);
// add()の戻り値を表示
console.log(add);
// コンソールに直接add()関数の戻り値を表示
console.log('Result : ', notes.add(3, 4));
