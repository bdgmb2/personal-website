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
    document.getElementById('mobile-navwindow').show();
}

window.onload = function() {
    var toRotate = document.getElementById('typewrite').getAttribute('data-type');
    if (toRotate) {
        new TxtType(document.getElementById('typewrite'), JSON.parse(toRotate), 700);
    }

    var scroll = new SmoothScroll('a[href*="#"]');

    TagCanvas.textColour = "#0F81CC";
    TagCanvas.textFont = "Highway Gothic, sans-serif";
    TagCanvas.txtScale = 3;
    TagCanvas.zoom = 2;
    TagCanvas.wheelZoom = false;
    TagCanvas.Start('skillcloud');

    document.getElementById('mobile-nav').click(onMobileClick);
};