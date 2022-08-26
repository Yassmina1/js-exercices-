//1°Highlighting all the words over 8 caracters in the paragraph text with a teal backround//
const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerHTML
    .split(' ')
    .map(word => word.length > 8 ? `<span style ="background-color:teal">${word}</span >` : word)
    .join(' ');
//3°spliting each nex sentance on to a separate line  in the paragraph text .A sentance can be assumed to be a string of text terminated with a period(.)
paragraph.innerHTML = paragraph.innerHTML
    .split(/\.[^\.|<]/)
    .join('.</p><p>') + '</p>';
//4°Counting the number of words in the paragraph tag and display the count after the heading
const Countingwords = paragraph.innerHTML.split(' ').length;
const newcontingwords = document.createElement('div');
newcontingwords.innerText = Countingwords;
let body = document.querySelector('body');
body.insertBefore(newcontingwords, paragraph);
//5°Replacing all question marksn(?) with thinking faces (🤔)and exclamation marks(!) with astonished faces (😳):
Array.from(document.querySelectorAll('p'))
    .forEach(p => {
        p.innerHTML = p.innerHTML
            .replace(/\?/g, '🤔')
            .replace(/\!/g, '😳');


    });







