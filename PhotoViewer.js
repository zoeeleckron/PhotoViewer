//This will format PhotoViewer
const GALLERY = "gallery";
const SINGLEVIEW = "single";
console.log("script opened");
let viewMode = GALLERY;
var photos = [document.getElementById("photo1"), document.getElementById("photo2"),document.getElementById("photo3"), document.getElementById("photo4")];
/*document.getElementById("viewPhotos").onclick = function() {
	console.log("button cliecked");
	for(let i=0; i< photos.length; i++) {
		photos[i].style.display= "none";
	}
}*/
//hide the 2 currently irrelevant buttons

document.getElementById("previous").style.display="none";
document.getElementById("next").style.display="none";

function galleryMode() {
	viewMode = GALLERY;
	document.body.style.backgroundColor= "DimGray";
	for(let i=0; i< photos.length; i++) {
		photos[i].style.width='20%';
		photos[i].style.height='20%';
		photos[i].style.opacity = .6;
		photos[i].style.display= "block";
	}
	document.getElementById("previous").style.display="none";
	document.getElementById("next").style.display="none";
}
galleryMode()

var currPhotoIndex = 0;
function singleMode(image) {
	viewMode = SINGLEVIEW;
	document.body.style.backgroundColor= "Black";
	for(let i=0; i< photos.length; i++) {
		if(image.id === photos[i].id) {
			currPhotoIndex = i;
		}
		photos[i].style.width='75%';
		photos[i].style.height='75%';
		photos[i].style.display= "none";
		photos[i].style.opacity = 1;
	}
	showPhoto(0);
}


//direction is either PREVIOUS (-1), NEXT (1), or STAY (0) (for first click into gallery)
function showPhoto(direction) {
	document.getElementById("previous").style.display="block";
	document.getElementById("next").style.display="block";
	//hide the current photo
	photos[currPhotoIndex].style.display= "none";
	//update currPhoto
	currPhotoIndex += direction;
	photos[currPhotoIndex].style.display= "block";
	//there are no previous photos (first photo)
	if(currPhotoIndex === 0){
		document.getElementById("previous").style.display="none";
	}
	//there are no next photos (last photo)
	if(currPhotoIndex === photos.length-1){
		document.getElementById("next").style.display="none";
	}

}
function enlarge(attribute) {
	if (viewMode === GALLERY) {
		attribute.style.width = "30%"
		attribute.style.height = "30%"
		attribute.style.opacity = 1;
	}
}

function shrink(attribute) {
	if (viewMode === GALLERY) {
		attribute.style.width= "20%"
		attribute.style.height= "20%"
		attribute.style.opacity= .6;
	}
}

