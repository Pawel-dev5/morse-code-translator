// HELPERS
import { translateMorseToCharacter } from 'components/helpers/translateMorseToCharacter';

export const translateFromMorseToText = (morseText: string) => morseText.split(' ').map(translateMorseToCharacter).join('');
