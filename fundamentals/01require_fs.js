console.log('Stargint 01require.js');

const fs = require('fs');

fs.appendFile('greetings.txt', 'Hello World!', function(err) {
    if(err) {
        console.log('ファイルを開くことができません');
    }
});
