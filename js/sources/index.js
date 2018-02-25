(function() {
    var navHidden = true;
    document.getElementById('hamburger').onclick = function() {
        var vertNav = document.getElementById('vert-nav');
        if (navHidden) {
            vertNav.style.visibility = 'visible';
        }
        else
            vertNav.style.visibility = 'hidden';
        navHidden = !navHidden;
    };

    var width = document.getElementById('wordcloud').offsetWidth;
    WordCloud(document.getElementById('wordcloud'), {
        list: [
            ['C++', 3],
            ['PHP', 3],
            ['C#', 3],
            ['Laravel', 3],
            ['ASP.Net', 3],
            ['Xamarin', 3],
            ['Windows Server', 3],
            ['HTML/CSS/JS', 3],
            ['UNIX/Linux', 3],
            ['SQL', 3],
            ['Video Production', 3],
            ['Redis', 3],
            ['Apache', 3],
            ['Powershell', 3],
            ['Python', 3],
            ['GTK+', 3],
            ['Git', 3],
            ['MySQL', 3]
        ],
        gridSize: Math.round(16 * width / 1024),
        fontWeight: 'lighter',
        weightFactor: function (size) {
            return Math.pow(size, 3.2);
        },
        fontFamily: 'Roboto Slab, serif',
        color: '#000',
        backgroundColor: '#FFFFFF'
    });
})();