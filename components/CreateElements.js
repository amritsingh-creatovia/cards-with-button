export function createEle(tag, tagClass) {
    const ele = document.createElement(tag);
    ele.classList.add(tagClass);
    return ele;
}