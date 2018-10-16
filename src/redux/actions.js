export const FAVORITE = '_favorite';

export const favorite = (gif) => ({
	type: FAVORITE,
	payload: gif
});
