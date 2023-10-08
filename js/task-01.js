const list = document.querySelector('#categories');
const items = list.querySelectorAll('li.item');

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
    const title = item.firstChild.textContent;
    const elements = item.children.length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
});


