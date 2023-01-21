function solve(input) {

    let arrayOfObjects = [];
    let names = [];
    let parentNames = [];
    for (let line of input) {
        let splitLine = line.split(' ');
        if (splitLine.length == 2) {
            let command = splitLine[0];
            let nameOfObject = splitLine[1];

            if (command == 'create') {
                let obj = {
                    nameOfObject
                }
                arrayOfObjects.push(obj);
            } else {

                for (let i = 0; i < names.length; i++) {
                    let name = names[i];
                    let InheritsName = parentNames[i];
                    let objectWeMustInherits = arrayOfObjects.find(x => x.nameOfObject == InheritsName);
                    let objectWeMustSetProperties = arrayOfObjects.find(x => x.nameOfObject == name);
                    let entriesFromInheritsObject = Object.entries(objectWeMustInherits);

                    for (let index = 1; index < entriesFromInheritsObject.length; index++) {
                        let key = entriesFromInheritsObject[index][0];
                        let value = entriesFromInheritsObject[index][1];
                        objectWeMustSetProperties[key] = value;
                    }

                }

                let object = arrayOfObjects.find(x => x.nameOfObject == nameOfObject);
                let entries = Object.entries(object);
                let finalArray = [];
                for (let index = 1; index < entries.length; index++) {
                    let key = entries[index][0];
                    let value = entries[index][1];

                    finalArray.push(`${key}:${value}`);
                }
                console.log(finalArray.join(','));


            }


        } else if (splitLine.length == 4) {

            if (splitLine[0] == 'create') {

                let name = splitLine[1];
                let parentName = splitLine[3];
                let object = arrayOfObjects.find(x => x.nameOfObject == parentName);
                names.push(name);
                parentNames.push(parentName);
                let newObject = Object.call(object);
                newObject.nameOfObject = name;
                arrayOfObjects.push(newObject);


            } else {
                let name = splitLine[1];
                let key = splitLine[2];
                let value = splitLine[3];
                let object = arrayOfObjects.find(x => x.nameOfObject == name);
                object[key] = value;
            }
        }
    }

}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);
//color:red
//model:new,color:red
