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


const isIE = () => {
    const ua = window.navigator.userAgent;
    return !!document.documentMode || ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1;
};

const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

const isBrowser = typeof window === 'object' && typeof document === 'object';

const isMobile = () => {
    const match = window.matchMedia('(pointer:coarse)');
    return match && match.matches || /Android|BlackBerry|iPad|iPod|iPhone|webOS/i
        .test(navigator.userAgent);
};

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log(isBrowser);

document.getElementById('isBrowser').innerHTML = `${(typeof window === 'object' && typeof document === 'object')}`;
document.getElementById('isInternetExplorer').innerHTML = `${isIE()}`;
document.getElementById('isMac').innerHTML = `${isMac}`;
document.getElementById('isMobile').innerHTML = `${isMobile()}`;
document.getElementById('isDarkMode').innerHTML = `${isDarkMode}`;
