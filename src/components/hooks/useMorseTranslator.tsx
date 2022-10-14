import { createContext, useCallback, useEffect, useState } from 'react';

// HELPERS
import { translateMorseToCharacter } from 'components/helpers/translateMorseToCharacter';
import { useDebounce } from 'components/helpers/useDebounce';
import { ContextProviderProps } from 'components/models/hooks';
import useKeyboardShortcut from 'use-keyboard-shortcut';

export const useMorseTranslator = () => {
	const dotThreshold = 200;
	const inactivityThreshold = 1000;

	const [morseText, setMorseText] = useState<string>('');
	const [textToTranslate, setTextToTranslate] = useState<string>('');
	const [translatedText, setTranslatedText] = useState<string>('');
	const [lastButtonPressed, setLastButtonPressed] = useState<number | null>(null);

	const writeValueDebounced = useDebounce(textToTranslate, inactivityThreshold);

	// BUTTON HANDLER
	const onButtonMouseDown = () => setLastButtonPressed(Date.now());
	const onButtonMouseUp = () => {
		let timeElapsed;
		let newText;
		const now = Date.now();

		if (lastButtonPressed) timeElapsed = now - lastButtonPressed;
		if (timeElapsed) {
			newText = timeElapsed < dotThreshold ? `${textToTranslate}.` : `${textToTranslate}-`;
			setTextToTranslate(newText);
		}
	};

	// TRANALSTOR
	useEffect(() => {
		const newText = translateMorseToCharacter(textToTranslate !== '' ? textToTranslate : '');

		if (newText) {
			const newMorseText = `${morseText} ${textToTranslate}`;
			// UPDATING VALUES
			setMorseText(newMorseText);
			setTranslatedText(`${translatedText}${newText}`);
		}

		if (!newText && textToTranslate !== '') {
			// eslint-disable-next-line no-alert
			alert('Nie znaleziono litery, spróbuj ponownie');
		}
		// RESET
		setLastButtonPressed(null);
		setTextToTranslate('');
	}, [writeValueDebounced]);

	// KEYBOARD HANDLER
	const options = { overrideSystem: true, ignoreInputFields: true, repeatOnHold: false };
	const keyB = ['B'];
	const keySpace = [' '];
	const handleKeyboardShortDot = useCallback(() => setTextToTranslate(`${textToTranslate}.`), [textToTranslate]);
	const handleKeyboardShortDash = useCallback(() => setTextToTranslate(`${textToTranslate}-`), [textToTranslate]);

	useKeyboardShortcut(keyB, handleKeyboardShortDash, options);
	useKeyboardShortcut(keySpace, handleKeyboardShortDot, options);

	const resetAll = () => {
		setMorseText('');
		setTextToTranslate('');
		setTranslatedText('');
		setLastButtonPressed(null);
	};

	return {
		morseText,
		translatedText,
		onButtonMouseDown,
		onButtonMouseUp,
		resetAll,
	};
};

export const ContextData = createContext({} as ReturnType<typeof useMorseTranslator>);

export const ContextProvider = ({ children }: ContextProviderProps) => (
	<ContextData.Provider value={useMorseTranslator()}>{children}</ContextData.Provider>
);
