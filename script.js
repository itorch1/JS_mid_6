const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input', fetchFact);

async function fetchFact(e) {
    const number = e.target.value;
    if (number === '') {
        output.style.display = 'none';
        return;
    }
    
    // const data = await fetch(`http://numbersapi.com/asd`)
    //     .then(res => res.text())

    // output.querySelector('p').innerText = data;
    // output.style.display = 'block';

    try{
        const res = await fetch(`http://numbersapi.com/${number}`);
        if (!res.ok) {
            throw new Error('Bad response dood', { cause: res });
        }
        const data = await res.text();
        output.querySelector('p').innerText = data;
        output.style.display = 'block';
    } catch(err) {
        // Get error status
        console.log(err.cause.status);
        throw err;
    }
}