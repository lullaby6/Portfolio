const momentumStrength = 0.05;
const momentumDragPercent = 0.0075;
let scrollMomentumSpeed = 0;
let scrollPosition = window.scrollY;
let momentumScrollInProgress = false;

window.addEventListener('scroll', e => {
	deltaScroll = window.scrollY - scrollPosition;
	scrollPosition = window.scrollY;
	if(!momentumScrollInProgress) {
		if(deltaScroll * scrollMomentumSpeed > 0) {
			scrollMomentumSpeed += deltaScroll * momentumStrength;
		}else{
			scrollMomentumSpeed = deltaScroll * momentumStrength;
		}
	}
});

let previousTimestamp = Date.now();
async function momentumLoop(timestamp) {
	if(Math.abs(scrollMomentumSpeed) < 0.3 || scrollPosition === 0) scrollMomentumSpeed = 0;
		if(scrollMomentumSpeed !== 0) {
			const delta = timestamp - previousTimestamp;

			scrollMomentumSpeed = scrollMomentumSpeed * (1 - momentumDragPercent * delta);

			momentumScrollInProgress = true;
			window.scrollTo(0, window.scrollY + scrollMomentumSpeed * delta);

			await new Promise((resolve, reject) => {
				window.addEventListener('scroll', resolve, {once: true});
			});

			momentumScrollInProgress = false;
		}

	previousTimestamp = timestamp;
	requestAnimationFrame(momentumLoop);
}

requestAnimationFrame(momentumLoop);