// Download an Instagram video.

javascript: (function() {
    var vid = document.getElementsByTagName('video')[0].src;
    var url = vid.replace(/^data:video\/[^;]/, 'data:application/octet-stream');
    window.open(url)
})()
