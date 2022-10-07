/* eslint-disable @typescript-eslint/no-unused-vars */
import { translateFromMorseToText } from 'components/helpers/translateFromMorseToText';
import { translateMorseToCharacter } from 'components/helpers/translateMorseToCharacter';
import { useEffect, useState } from 'react';

export const useMorseTranslator = () => {
	const dotThreshold = 200;
	const inactivityThreshold = 600;

	const [morseText, setMorseText] = useState('');
	const [translatedText, setTranslatedText] = useState('');
	const [lastButtonPressedDown, setLastButtonPressedDown] = useState<number | undefined>(undefined);
	const [lastButtonPressedUp, setLastButtonPressedUp] = useState<number | undefined>(undefined);

	const checkInactivity = (now: number | undefined) => () => {
		console.log(lastButtonPressedUp);
		console.log(now);
		if (lastButtonPressedUp === now) {
			setLastButtonPressedDown(undefined);
			setLastButtonPressedUp(undefined);

			// eslint-disable-next-line prefer-template
			const newMorseText = morseText + ' ';
			const newTranslatedText = translateMorseToCharacter(newMorseText);

			setMorseText(newMorseText);
			setTranslatedText(newTranslatedText);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			// eslint-disable-next-line prefer-template
			const newMorseText = morseText + ' ';
			const newTranslatedText = translateFromMorseToText(newMorseText);

			// setMorseText(newMorseText);
			setTranslatedText(newTranslatedText);

			setLastButtonPressedDown(undefined);
			setLastButtonPressedUp(undefined);
		}, inactivityThreshold);
	}, [morseText]);

	const onButtonMouseDown = () => {
		setLastButtonPressedDown(Date.now());
		setLastButtonPressedUp(undefined);
	};

	const onButtonMouseUp = () => {
		const now = Date.now();
		let timeElapsed;
		let morseCharacter;
		if (lastButtonPressedDown) timeElapsed = now - lastButtonPressedDown;
		if (timeElapsed) morseCharacter = timeElapsed < dotThreshold ? '.' : '-';

		setLastButtonPressedDown(undefined);
		setLastButtonPressedUp(now);
		if (morseCharacter) setMorseText(morseText + morseCharacter);
	};

	return {
		morseText,
		translatedText,
		onButtonMouseDown,
		onButtonMouseUp,
	};
};
