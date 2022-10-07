import { morseTable } from 'components/constans/morseTable';

// MODELS
import { MorseTableInterface } from 'components/models/constans';

export const translateMorseToCharacter = (morseText: string) => {
	console.log('morseText', morseText);
	if (!morseText.length) return '';
	return morseTable[morseText as keyof MorseTableInterface] || '💩';
};
