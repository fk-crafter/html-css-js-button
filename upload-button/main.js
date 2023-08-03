const slice = (file, start, end) => {
	const sliceExec = file.slice || file.mozSlice || file.webkitSlice;
	return sliceExec(start, end);
};

const upload = (file) => {
	const filename = file.name,
				size = file.size,
				numSlices = 40,
				step = size / numSlices,
				totalDemoUploadTime = 4000,
				demoUploadTimeout = totalDemoUploadTime / numSlices;
	
	document.getElementById('icon').innerHTML = 'cloud';
	document.getElementById('icon').classList.add('uploading');
	
	try {
		let sendslice = (start, id = 0) => {
			let end = start + step < size ? start + step : size;
			let progress = Math.round(end / size * 100) / 100;	
			document.getElementById('icon').style.fontVariationSettings = `'OPSZ' 96, 'FILL' ${progress}`;
			
			if (end < size) return setTimeout((end, id) => sendslice(end, id), demoUploadTimeout, end, id);
			
			document.getElementById('icon').innerHTML = 'cloud_done';
			document.getElementById('icon').classList.remove('uploading');
			document.getElementById('icon').classList.add('done');
			
			setTimeout(() => {
				document.getElementById('icon').style.fontVariationSettings = `'OPSZ' 96, 'FILL' 0.0`;
				document.getElementById('icon').innerHTML = 'cloud_upload';
				document.getElementById('icon').classList.remove('done');
			}, 2000);
		};
		
		sendslice(0);
		
	} catch (err) {
		document.getElementById('icon').innerHTML = 'cloud_off';
		document.getElementById('icon').classList.remove('uploading');
		console.warn(err);
	}
}

document.getElementById("f").addEventListener("change", (e) => {
	if (e.target.files.length == 0) return;
	upload(e.target.files[0])
});
