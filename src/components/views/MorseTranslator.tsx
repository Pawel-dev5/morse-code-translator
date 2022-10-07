// HOOKS
import { useMorseTranslator } from 'components/hooks/useMorseTranslator';

export const MorseTranslator = () => {
	const { morseText, translatedText, onButtonMouseDown, onButtonMouseUp } = useMorseTranslator();
	console.log(translatedText);
	return (
		<>
			<button type="button" onMouseDown={onButtonMouseDown} onMouseUp={onButtonMouseUp}>
				Button
			</button>
			<span>Morse: {morseText}</span>
			<span>Text: {translatedText}</span>
		</>
	);
};
