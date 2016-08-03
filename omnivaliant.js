(function () {

    var c = document.getElementById('bubbles'),
        randomN = function (start, end) {
            return Math.random() * end + start;
        },
        i = 0,
        generateBubble = function () {
            if (i < 20) {
                var el = document.createElement('div'),
                    size = randomN(5, 10);
                el.setAttribute('style', 'width: ' + size + 'px; height: ' + size + 'px; left:' + randomN(1, c.offsetWidth - (size + 4)) + 'px;');
                c.appendChild(el);
                i++;
            } else {
                clearInterval(inter);
            }
        };

    generateBubble();

    var inter = setInterval(generateBubble, 500);

})();