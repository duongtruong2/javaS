document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(text);
    for (const [i,row] of rows.entries) {
        row.toLowerCase().trim().split('_');

        const output = `${first}${second.replace(
            second[0], 
            second[0].toUpperCase()
            )}`
        console.log(`${output.padEnd(20,)}${''.repeat(i+1)}`);
    }
});

// undersccose_case -> undersccose_case
// first_name
// Some_Vảiable
// calculate_AGE
// delayed_departure