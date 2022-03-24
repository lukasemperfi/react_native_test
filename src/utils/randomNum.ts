export const randomInteger = (min: number, max: number): number => {
	let rand: number = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}