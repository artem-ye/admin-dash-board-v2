import React, { useCallback, useEffect, useState } from 'react';
const LazyImage = ({ path, placeHolder, loadError, ...props }) => {
	const [img, setImg] = useState(path);
	const [isLoading, setIsLoading] = useState(true);

	const onLoad = useCallback(() => {
		setIsLoading(false);
	}, []);

	const onError = useCallback(() => {
		setIsLoading(false);
		setImg(loadError);
	}, [loadError]);

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

	return isLoading ? placeHolder : <img {...props} alt={img} src={img} />;
};
export default LazyImage;
