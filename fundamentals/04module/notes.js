console.log('Starting notes.js');

// モジュールの情報をコンソールに表示
console.log(module);

// モジュールのexprotsに新しいageを作って、そこに25を代入
module.exports.age = 25;

// moduleのexportsにaddNoteという新しい関数を生成
module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
};

// moduleのexportsを使って、2つの数を足す関数を作成
module.exports.add = (a, b) => {
    return a + b;
};
