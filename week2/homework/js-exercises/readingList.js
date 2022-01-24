const myList = [
    {title: 'Pachinko',
     author: 'Jin Lee',
     alreadyRead: true
    },
    {
        title: 'the beauty myth',
        author: 'Naomi Wolf',
        alreadyRead: false
    },
    {
        title: 'less',
        author: 'Andrew greer',
        alreadyRead: true
    }
];

for (let index in myList) {
    const book = myList[index];

    if (book.alreadyRead) {
        console.log(`${book.title} by ${book.author}. You already read "${book.title}".`);
    } else {
        console.log(`${book.title} by ${book.author}. You still need to read "${book.title}".`);
    }
}