const list = document.querySelector('#categories');
const items = Array.from(list.children);

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
    const title = item.firstElementChild.textContent;
    const elements = item.lastElementChild.children.length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
});



