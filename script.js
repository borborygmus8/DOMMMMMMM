window.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Add Square';
    document.body.appendChild(button);

    let numDivs = 0;

    button.addEventListener('click', () => {
        const div = document.createElement('div'),
            span = document.createElement('span');

        div.className = 'div';
        div.id = numDivs;
        span.textContent = div.id;
        span.style.display = 'none';

        div.addEventListener('mouseover', () => {
            span.style.display = 'flex';
        });

        div.addEventListener('mouseout', () => {
            span.style.display = 'none';
        });

        div.addEventListener('click', () => {
            const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            div.style.backgroundColor = color;
        });

        div.addEventListener('dblclick', () => {
            if (div.getAttribute('id') % 2 === 0) {
                if (div.nextElementSibling) {
                    document.body.removeChild(div.nextElementSibling);
                    numDivs--;
                } else {
                    alert('No next element sibling to remove!');
                }
            } else {
                if (div.previousElementSibling && div.previousElementSibling.classList.contains('div')) {
                    document.body.removeChild(div.previousElementSibling);
                    numDivs--;
                } else {
                    alert('No previous element sibling to remove!');
                }
            }
        });

        numDivs++;
        div.appendChild(span);
        document.body.appendChild(div);
    });
});
