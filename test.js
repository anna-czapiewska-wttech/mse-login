document.dispatchEvent(new CustomEvent('saveArticleLogiIn'));

var handleSaveArticleLogin = function() {
    console.log('llll');
};

var initSaveArticleOverlay = function() {
    document.addEventListener('saveArticleLogiIn', handleSaveArticleLogin);
};