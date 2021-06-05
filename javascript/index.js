const userDetails = {
	userId: 'TNT345678',
	firstName: 'Yeshwanth',
	lastName: 'Vepachadu',
	imgSrc: 'image/yeshwant.jpg',
	mobileNumber: '1234567891',
	email: 'yeshwanth@gmail.com',
	status: 'Await on BVG Team'
};


const displayUserName = () => {
	const parent = document.getElementsByClassName('display-welcome')[0];
	parent.innerHTML += `${userDetails.firstName}`;
}

const displayUserPicture = () => {
	const parent = document.getElementsByClassName('top-right-display')[0];
	const firstChild = document.getElementsByClassName('logout')[0];
	const image = document.createElement('img');
	image.style.borderRadius = '2rem';
	image.setAttribute('src', userDetails.imgSrc);
	image.setAttribute('id', 'user-image');
	parent.insertBefore(image,firstChild );

}

const displayUserInfo = () => {
	const parent = document.getElementsByClassName('user-info')[0];
	const children = parent.getElementsByTagName('span');
	const info = ['email','mobileNumber', 'status'];
	for (let i = 0; i < 6; i += 2) {
		const span = document.createElement('span');
		span.innerHTML = userDetails[info.shift()];
		console.log(children[i]);
		children[i].insertAdjacentElement('afterend', span);
	}
	const idSpan = document.createElement('span');
	idSpan.innerHTML = userDetails.firstName+' '+ userDetails.lastName + './' +userDetails.userId;
	children[0].insertAdjacentElement('beforebegin', idSpan);
}

displayUserName();
displayUserPicture();
displayUserInfo();
