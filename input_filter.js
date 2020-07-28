document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('numbersInput');
    const value = element.value;
    const state = {
        value
    };

    element.addEventListener('keydown', e => {
        const target = e.target;
        state.selectionStart = target.selectionStart;
        state.selectionEnd = target.selectionEnd;
    });

    element.addEventListener('input', e => {
        const target = e.target;

        if (/^[0-9]*$/.test(target.value)) {
            state.value = target.value;
        } else {
            target.value = state.value;
            target.setSelectionRange(state.selectionStart, state.selectionEnd);
        }
    });
});



const textAreaElement = document.getElementById('countedArea');
const counterElement = document.getElementById('counter');

textAreaElement.addEventListener('input', e => {
    const target = e.target;
    const maxLength = target.getAttribute('maxlength');
    const currentLength = target.value.length;

    counterElement.innerHTML = `${currentLength}/${maxLength}`;
});


const isBrowser = typeof window === 'object' && typeof document === 'object';

console.log(isBrowser);


document.getElementById('isBrowser').innerHTML = `${(typeof window === 'object' && typeof document === 'object')}`;
