const api = (function () {
    const BASE_URL = "https://thinkful-list-api.herokuapp.com/jefforiente";

    function getItems(callback) {
        callback('Api module works');
    }

    return {
        getItems,
    }

})();