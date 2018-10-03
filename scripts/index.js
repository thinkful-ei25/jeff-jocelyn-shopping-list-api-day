/* global shoppingList, store, api, $*/
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    // const item = store.items[0];
    // console.log('current name: ' + item.name);
    // store.findAndUpdate(item.id, { name: 'foobar' });
    // console.log('new name: ' + item.name);
    
    shoppingList.render();
  });
});

// api.getItems((items) =>{
  // const item = items[0];

  // api.updateItem(item.id, { name: 'fooooobar'}, () => {
    // console.log('updated!');
    ///////////////////////////////////
    
  // });


// const item = store.items[0];
// console.log('current name: ' + item.name);
// store.findAndUpdate(item.id, { name: 'foobar' });
// console.log('new name: ' + item.name);

// store.items.push(Item.create("apples"));


// api.getItems(function(data) {
//   console.log(data);
// });

// console.log(api.BASE_URL);

// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });
// });


