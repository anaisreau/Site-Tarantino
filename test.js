function catch_link() {
    var target = document.getElementById("search").value;
    var T_link = ["Death Boulevard", "filmographie.html#ancre6", "Death Proof","filmographie.html#ancre5", "Django Unchained","filmographie.html#ancre3", "Groom Service","filmographie.html#ancre11", "Inglorious Basterds","filmographie.html#ancre4", "Jackie Brown","filmographie.html#ancre10", "Kill Bill Volume 1","filmographie.html#ancre9", "Kill Bill Volume 2","filmographie.html#ancre8", "My Best Friend's Birthday","filmographie.html#ancre14", "Once upon a time in ... Hollywood","filmographie.html#ancre1", "Pulp Fiction","filmographie.html#ancre12", "Reservoir Dogs","filmographie.html#ancre13", "Sin City","filmographie.html#ancre7", "The Eight Hatefull","filmographie.html#ancre2",];
    for (let i = 0; i < Object.keys(T_link).length; i = i + 2) {
        if (target == T_link[i]) {
            window.location = T_link[i + 1];
        }
    }
}