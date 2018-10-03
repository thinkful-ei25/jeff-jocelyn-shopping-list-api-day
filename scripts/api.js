'use strict';
/* global api, $ */

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jeff';

  function createItem(name, callback){
    const newItem = JSON.stringify({
      name:name,
    });
    $.ajax({
      url: BASE_URL+'/items',
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
    });

  }
  function getItems(callback) {
    $.getJSON(BASE_URL+'/items', callback);

  }

  return {
    getItems,
    createItem,
  };

}());