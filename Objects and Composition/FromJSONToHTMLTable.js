function fromJSONToHTMLTable(input) {

    function escapeHTML(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    let jsonParsed = JSON.parse(input);

    console.log('<table>');

    let keys = Object.keys(jsonParsed[0]);
    let textOfKeys = keys.map(key => `<th>` + `${escapeHTML(key)}` + `</th>`);

    console.log('  <tr>' + textOfKeys.join('') + '</tr>');

    for (let index = 0; index < jsonParsed.length; index++) {

        let values = Object.values(jsonParsed[index]);
        let textOfValues = values.map(value => `<td>` + `${escapeHTML(value)}` + `</td>`);
        console.log('  <tr>' + textOfValues.join('') + '</tr>');

    }

    console.log('</table>');

}
fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
);
console.log('-------------');
fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
);
