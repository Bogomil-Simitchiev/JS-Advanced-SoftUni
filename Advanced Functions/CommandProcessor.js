function solution() {

    let str = '';

    let object = {
        print() {
            console.log(str);
        },
        append(text) {
            str += text;
        },
        removeStart(n) {
            if (n < str.length) {
                for (let i = 0; i < n; i++) {
                    str = str.replace(str[0], '');
                }
            }
        },
        removeEnd(n) {
            if (n < str.length) {
                str = str.slice(0, str.length - n);
            }
        }

    }

    return object;

}
let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
