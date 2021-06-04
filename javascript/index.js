const userDetails = {
	firstName: 'Yeshwanth',
	lastName: 'Vepachadu',
	imgSrc: 'image/yeshwant.jpg'
};


const displayUserName = () => {
	const parent = document.getElementsByClassName('display-welcome')[0];
	parent.innerHTML += `${userDetails.firstName}`;
}

const displayUserPicture = () => {
	const parent = document.getElementsByClassName('top-right-display')[0];
	const firstChild = document.getElementsByClassName('logout')[0];
	const image = document.createElement('img');
	image.setAttribute('src', userDetails.imgSrc);
	image.setAttribute('id', 'user-image');
	parent.insertBefore(image,firstChild );

}

displayUserName();
displayUserPicture();
