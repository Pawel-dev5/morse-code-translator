import { morseTable } from 'components/constans/morseTable';

// MODELS
import { MorseTableInterface } from 'components/models/constans';

export const translateMorseToCharacter = (morseText: string) => {
	if (!morseText.length || !morseTable[morseText as keyof MorseTableInterface]) return null;
	return morseTable[morseText as keyof MorseTableInterface];
};
