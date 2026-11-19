/* Navigation, pied de page, avis : partagés par toutes les pages du dossier /pages */
(function () {
  var courante = location.pathname.split('/').pop();
  var liens = [['Accueil', '../index.html'], ['Chambres', 'chambres.html'], ['Restaurant', 'restaurant.html'],
               ['Spa', 'spa.html'], ['Avis', 'avis.html'], ['Contact', 'contact.html']];
  var items = liens.map(function (l) {
    var actif = l[1].split('/').pop() === courante ? ' active' : '';
    return '<li class="nav-item"><a class="nav-link' + actif + '" href="' + l[1] + '">' + l[0] + '</a></li>';
  }).join('');

  var nav = document.getElementById('nav');
  if (nav) nav.innerHTML =
    '<nav class="navbar navbar-expand-lg bg-light sticky-top"><div class="container-fluid px-3">' +
    '<a class="navbar-brand" href="../index.html"><img src="../img/logo.png" alt="Hôtel Chambord"></a>' +
    '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Ouvrir le menu"><span class="navbar-toggler-icon"></span></button>' +
    '<div class="collapse navbar-collapse" id="menu"><ul class="navbar-nav mx-auto">' + items + '</ul>' +
    '<form class="d-flex me-lg-3 my-2 my-lg-0" role="search" action="#"><input class="form-control me-2" type="search" placeholder="Rechercher" aria-label="Rechercher">' +
    '<button class="btn" type="submit" aria-label="Lancer la recherche"><i class="bi bi-search"></i></button></form>' +
    '<a class="nav-link" href="connexion.html" aria-label="Connexion"><i class="bi bi-person-circle fs-4"></i></a>' +
    '</div></div></nav>';

  var pied = document.getElementById('footer');
  if (pied) pied.innerHTML =
    '<footer><div class="container"><div class="row g-4">' +
    '<div class="col-12 col-md-5"><h2 class="h3">Liens utiles</h2><ul class="list-unstyled">' +
    '<li><a class="link-dark text-decoration-none" href="contact.html">Contact</a></li>' +
    '<li><a class="link-dark text-decoration-none" href="recrutement.html">Recrutement</a></li>' +
    '<li><a class="link-dark text-decoration-none" href="#">Mentions légales</a></li>' +
    '<li><a class="link-dark text-decoration-none" href="#">Politique de protection des données</a></li>' +
    '<li><a class="link-dark text-decoration-none" href="#">Politique cookies</a></li></ul>' +
    '<h2 class="h3 mt-4">Suivez-nous</h2>' +
    '<a class="btn btn-outline-dark me-1" href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>' +
    '<a class="btn btn-outline-dark me-1" href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>' +
    '<a class="btn btn-outline-dark" href="#" aria-label="Twitter"><i class="bi bi-twitter"></i></a></div>' +
    '<div class="col-12 col-md-7"><h2 class="h3">Contactez Nous</h2>' +
    '<form class="demo" action="#" method="post" novalidate><div class="row g-2">' +
    '<div class="col-6"><label class="form-label" for="f-nom">Nom</label><input class="form-control" id="f-nom" name="nom" required></div>' +
    '<div class="col-6"><label class="form-label" for="f-prenom">Prénom</label><input class="form-control" id="f-prenom" name="prenom" required></div>' +
    '<div class="col-6"><label class="form-label" for="f-email">Email</label><input type="email" class="form-control" id="f-email" name="email" required></div>' +
    '<div class="col-6"><label class="form-label" for="f-sujet">Votre sujet</label><input class="form-control" id="f-sujet" name="sujet" required></div>' +
    '<div class="col-12"><label class="form-label" for="f-message">Votre message</label><textarea class="form-control" id="f-message" name="message" rows="4" required></textarea></div>' +
    '<div class="col-12 text-end"><button class="btn btn-dark px-4" type="submit">Envoyer</button></div></div></form></div></div>' +
    '<p class="text-center mt-4 mb-1">© 2023 Hôtel Chambord. Tous droits réservés.</p>' +
    '<p class="text-center mention mb-0">Attention ce site n\'est pas à but commercial. Il est uniquement destiné à des fins d\'apprentissage.</p>' +
    '</div></footer>';

  /* Formulaires de démonstration : validation Bootstrap, pas d'envoi (backend à venir) */
  document.querySelectorAll('form.demo').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      if (f.checkValidity()) { alert('Formulaire valide : prêt à être traité par le backend.'); f.reset(); f.classList.remove('was-validated'); }
      else { f.classList.add('was-validated'); }
    });
  });
})();

/* Témoignages */
var AVIS = {
  chambres: [
    ['maria', 'Maria Smantha', 'Web Developer', "Le cadre est très sympa, les propriétaires sont très accueillants, très agréables et de bons conseils. Petit déjeuner exceptionnel avec des confitures maison à ne pas rater.", 4.5],
    ['lisa', 'Lisa Cudrow', 'Graphic Designer', "Un séjour parfait dans un cadre magnifique. La chambre était spacieuse et très bien décorée. Le personnel était aux petits soins.", 5],
    ['john', 'John Smith', 'Marketing Specialist', "Un hôtel magnifique avec un service impeccable. La chambre était très confortable et bien équipée. Je recommande cet établissement.", 4]],
  restaurant: [
    ['maria', 'Maria Smantha', 'Web Developer', "Cuisine raffinée, beaucoup de saveur dans chacun des plats, une réelle originalité sans être tape à l'œil. Bravo et merci.", 4.5],
    ['lisa', 'Lisa Cudrow', 'Graphic Designer', "Un cadre agréable, un service attentionné et des plats savoureux.", 5],
    ['john', 'John Smith', 'Marketing Specialist', "La cuisine est délicieuse, le service impeccable et l'ambiance chaleureuse. Un endroit parfait pour un dîner en amoureux ou un repas en famille.", 4]],
  spa: [
    ['maria', 'Maria Smantha', 'Web Developer', "Un moment de pure détente. Le spa est magnifique et les soins sont de qualité.", 4.5],
    ['lisa', 'Lisa Cudrow', 'Graphic Designer', "Un cadre apaisant et un personnel aux petits soins. Je reviendrai.", 5],
    ['john', 'John Smith', 'Marketing Specialist', "Des soins de qualité. Le personnel est très professionnel et attentionné. Je recommande vivement cet établissement.", 4]],
  activites: [
    ['maria', 'Maria Smantha', 'Web Developer', "J'ai adoré les balades à vélo autour du château. Les paysages et les sentiers sont bien entretenus. C'était une expérience inoubliable.", 4.5],
    ['lisa', 'Lisa Cudrow', 'Graphic Designer', "Le vol en montgolfière était incroyable ! Voir le château d'en haut est une expérience magique. Le personnel était très professionnel et attentionné.", 5],
    ['john', 'John Smith', 'Marketing Specialist', "Le parcours de golf est magnifique et très bien entretenu. J'ai passé une excellente journée à jouer au golf tout en profitant de la vue imprenable sur le château.", 4]]
};
function afficherAvis(idZone, cle) {
  var zone = document.getElementById(idZone);
  if (!zone) return;
  zone.innerHTML = '<div class="row g-4 justify-content-center">' + AVIS[cle].map(function (a) {
    var etoiles = '';
    for (var i = 1; i <= 5; i++) etoiles += '<i class="bi bi-star' + (a[4] >= i ? '-fill' : (a[4] >= i - .5 ? '-half' : '')) + '"></i>';
    return '<div class="col-12 col-md-4 text-center temoignage"><img src="../img/' + a[0] + '.jpg" alt="' + a[1] + '" class="mb-3">' +
      '<h3 class="h5 fw-normal">' + a[1] + '</h3><p class="text-primary small">' + a[2] + '</p>' +
      '<p><i class="bi bi-quote"></i> ' + a[3] + '</p><div class="etoiles" aria-label="Note : ' + a[4] + ' sur 5">' + etoiles + '</div></div>';
  }).join('') + '</div>';
}
