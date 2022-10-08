import { useEffect, useState } from 'react';

// HELPERS
import { translateMorseToCharacter } from 'components/helpers/translateMorseToCharacter';
import { useDebounce } from 'components/helpers/useDebounce';

export const useMorseTranslator = () => {
	const dotThreshold = 200;
	const inactivityThreshold = 1000;

	const [morseText, setMorseText] = useState<string>('');
	const [textToTranslate, setTextToTranslate] = useState<string>('');
	const [translatedText, setTranslatedText] = useState<string>('');
	const [lastButtonPressed, setLastButtonPressed] = useState<number | null>(null);
	const writeValueDebounced = useDebounce(textToTranslate, inactivityThreshold);
	const [keyPress, setKeyPress] = useState<number>(0);

	const resetAll = () => {
		setMorseText('');
		setTextToTranslate('');
		setTranslatedText('');
		setLastButtonPressed(null);
	};

	const onButtonMouseDown = (e: any) => {
		if (e) setKeyPress(keyPress + 1);
		setLastButtonPressed(Date.now());
	};

	const onButtonMouseUp = (e: any) => {
		let timeElapsed;
		let newText;
		const now = Date.now();

		setLastButtonPressed(null);
		if (lastButtonPressed) timeElapsed = now - lastButtonPressed;
		if (timeElapsed && !e) newText = timeElapsed < dotThreshold ? '.' : '-';
		if (e) newText = keyPress > 3 ? '-' : '.';
		if (newText) setTextToTranslate(`${textToTranslate}${newText}`);
	};

	useEffect(() => {
		if (textToTranslate !== '') {
			const newText = translateMorseToCharacter(textToTranslate);

			if (newText) {
				const newMorseText = `${morseText} ${textToTranslate}`;

				// UPDATING VALUES
				setMorseText(newMorseText);
				setTranslatedText(`${translatedText}${newText}`);

				// RESET
				setTextToTranslate('');
				setKeyPress(0);
				setLastButtonPressed(null);
			}

			if (!newText) {
				// eslint-disable-next-line no-alert
				alert('Nie znaleziono litery, spróbuj ponownie');
				setTextToTranslate('');
				setLastButtonPressed(null);
			}
		}
	}, [writeValueDebounced]);

	return {
		morseText,
		translatedText,
		onButtonMouseDown,
		onButtonMouseUp,
		resetAll,
	};
};
