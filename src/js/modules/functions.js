function appendChildren(element, ...children) {
    for (let child of children) {
        element.appendChild(child);
    }
    return element;
}





export { appendChildren }