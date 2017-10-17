var fixedGoBackButton = document.getElementById('fixedGoBackButton');
var competitionNavbar = document.getElementById('competition-navbar');

var firstCompetitorNavbarNav = document.getElementById('firstCompetitorNavbarNav');
var secondCompetitorNavbarNav = document.getElementById('secondCompetitorNavbarNav');
var primerCompetidorDiv = document.getElementById('primerCompetidorDiv');
var segundoCompetidorDiv = document.getElementById('segundoCompetidorDiv');

if (firstCompetitorNavbarNav && secondCompetitorNavbarNav) {
	var primerCompetidorDivHeight = primerCompetidorDiv.offsetHeight;
}

window.onscroll = function() {scrollFunction(); if (firstCompetitorNavbarNav && secondCompetitorNavbarNav) {changeCompetitorNavbar()};};

function scrollFunction () {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		fixedGoBackButton.style.opacity = 1;
		console.log('in');
		if (firstCompetitorNavbarNav && secondCompetitorNavbarNav) {competitionNavbar.style.opacity = 1;}
	} else {
		fixedGoBackButton.style.opacity = 0;
		if (firstCompetitorNavbarNav && secondCompetitorNavbarNav) {competitionNavbar.style.opacity = 0;}
	}
}

function scrollToTop () {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function changeCompetitorNavbar () {
	if (document.documentElement.scrollTop < (primerCompetidorDivHeight)) {
		firstCompetitorNavbarNav.style.display = "flex";
		secondCompetitorNavbarNav.style.display = "none";
	} else {
		firstCompetitorNavbarNav.style.display = "none";	
		secondCompetitorNavbarNav.style.display = "flex";
	}
}