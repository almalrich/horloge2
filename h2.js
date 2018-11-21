function ana () {
    var temps = new Date;

    var heure = temps.getHours();

    var minute = temps.getMinutes();

    var seconde = temps.getSeconds();

    var secdegre = seconde * 6;

    var mindegre = minute * 6;

    var heuredegre = heure * 30;

    document.getElementById("seconde").style.transform = "rotate(" + secdegre + "deg)";

    document.getElementById("seconde").style.transformOrigin = 'bottom left';

    document.getElementById("minute").style.transform = "rotate(" +mindegre + "deg)";

    document.getElementById("minute").style.transformOrigin = 'bottom left';

    document.getElementById("heur").style.transform = "rotate(" +heuredegre + "deg)";

    document.getElementById("heur").style.transformOrigin = 'bottom left';

    setTimeout(ana, 500);

}

ana();
