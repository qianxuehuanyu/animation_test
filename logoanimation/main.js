(function () {
		/* body... */
		let container=document.getElementsByClassName("container")[0];
		let inbackground=container.getElementsByClassName("inbackground")[0];
		let inround=inbackground.getElementsByClassName("inround")[0];
		let angle=0;
		let outkey=true;
		let angleadd;
		let angleless;
		// console.log(container,inbackground,inround);
		function roundrometa(key) {
			outkey=key;
			if(outkey){
				angleadd=setInterval(function () {
					angle++;
					inround.style.transform = 'rotate('+angle+'deg)';
					console.log(inround.style.transform);
				},10);
			}else{
				
				angleless=setInterval(function () {
					angle--;
					inround.style.transform = 'rotate('+angle+'deg)';
					if(angle<0){
						angle=0;
						clearInterval(angleless);
					}
				},200/angle)
			}
		}

		inbackground.onmouseover=function () {
			clearInterval(angleless);
			roundrometa(true);
		}
		inbackground.onmouseout=function () {
			roundrometa(false);
			clearInterval(angleadd);
		}

	})();