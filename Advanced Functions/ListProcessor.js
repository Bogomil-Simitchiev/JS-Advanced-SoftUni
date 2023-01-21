function solution(arrayCommands) {
    let collection = [];

    let object = {
        add(text) {
            collection.push(text);
        },
        remove(text) {
            collection = collection.filter(element => element !== text);
        },
        print() {
            console.log(collection.join(','));
        }
    }
    arrayCommands.forEach(command => {
        let splitCommand = command.split(' ');
        let action = splitCommand[0];
        let text = splitCommand[1];
        switch (action) {
            case 'add':
                object.add(text);
                break;
            case 'remove':
                object.remove(text);

                break;
            case 'print':
                object.print();
                break;
        }
    });

}
solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);