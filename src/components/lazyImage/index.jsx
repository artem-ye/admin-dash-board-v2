import React, { useCallback, useEffect, useState } from 'react';
const LazyImage = ({ path, placeholder, loadError, ...props }) => {
	const [img, setImg] = useState(placeholder || path);

	const onLoad = useCallback(() => {
		setImg(path);
	}, [path]);

	const onError = useCallback(() => {
		setImg(loadError || placeholder);
	}, [loadError, placeholder]);

	useEffect(() => {
		const imageObj = new Image();
		imageObj.src = path;
		imageObj.addEventListener('load', onLoad);
		imageObj.addEventListener('error', onError);
		return () => {
			imageObj.removeEventListener('load', onLoad);
			imageObj.removeEventListener('error', onError);
		};
	}, [path, onLoad, onError]);

	return <img {...props} alt={img} src={img} />;
};
export default LazyImage;
