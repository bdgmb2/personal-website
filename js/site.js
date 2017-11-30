var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    this.el.innerHTML = this.txt + "<span class=\"cursor\"></span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

function onMobileClick() {
    document.getElementById('mobile-navwindow').style.display = 'block';
}

function dismissMobileClick() {
    document.getElementById('mobile-navwindow').style.display = 'none';
    document.body.style.opacity = 1;
}

var linkFunctions = {
    hideAll: function() {
        var accordionChildren = document.getElementById('accordion-content').children;
        for (var i = 0; i < accordionChildren.length; i++) {
            accordionChildren[i].style.display = 'none';
        }
    },
    base: function(elem) { 
        this.hideAll();
        document.getElementById('triangle').style.display = 'block';
        document.getElementById('accordion-content').style.display = 'block';
        document.getElementById(elem).style.display = 'block';
    },
    html: function() { this.base('skill-html'); },
    php: function() { this.base('skill-php');  },
    laravel: function() { this.base('skill-laravel'); },
    CSharp: function() { this.base('skill-CSharp'); },
    ASP: function() { this.base('skill-ASP'); },
    xamarin: function() { this.base('skill-xamarin'); },
    CPlusPlus: function() { this.base('skill-CPlusPlus'); },
    GTK: function() { this.base('skill-GTK'); },
    python: function() { this.base('skill-python'); },
    linux: function() { this.base('skill-linux'); },
    windows: function() { this.base('skill-windows'); },
    video: function() { this.base('skill-video'); }
};

window.onload = function() {
    var toRotate = document.getElementById('typewrite').getAttribute('data-type');
    if (toRotate) {
        new TxtType(document.getElementById('typewrite'), JSON.parse(toRotate), 700);
    }

    var scroll = new SmoothScroll('a[href*="#"]');

    TagCanvas.Start('skillcloud', '', {
        textColour: "#0F81CC",
        textFont: "Highway Gothic, sans-serif",
        wheelZoom: false,
        shape: 'hcylinder',
        txtOpt: true,
        txtScale: 2,
        textHeight: 10,
        zoom: 1,
        radiusX: 3
    });

    linkFunctions.hideAll();
};