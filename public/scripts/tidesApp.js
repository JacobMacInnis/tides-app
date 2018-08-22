'use strict';

const tidesApp = (function () {


// js-search-form

  function handleZipAndDateSearch() {
    $('.js-search-form').on('submit', event => {
      event.preventDefault();
      const searchForm = $(event.currentTarget);
      const newTideSearch = {
        zipcode: searchForm.find('.js-zipcode-entry').val(),
        date: searchForm.find('.js-date-entry').val(),
      };
      console.log(newTideSearch);
    });
    
    
  }

  function bindEventListeners() {
    handleZipAndDateSearch();
  }

  // This object contains the only exposed methods from this module:
  return {
    
    bindEventListeners,
  };

}());