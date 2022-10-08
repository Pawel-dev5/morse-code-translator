import { useContext } from 'react';

// CONTEXT
import { ContextProvider, ContextData } from 'components/hooks/useMorseTranslator';

// COMPONENTS
import { Instruction } from 'components/sections';
import { Buttons } from 'components/sections/Buttons';

// STYLES
import { StyledMorseTranslator } from 'components/Styles';

export const MorseTranslatorWrapper = () => {
	const { morseText, translatedText } = useContext(ContextData);

	return (
		<ContextProvider>
			<StyledMorseTranslator>
				<h1>Morse code translator</h1>
				<Buttons />

				<span>Morse: {morseText}</span>
				<span>Text: {translatedText}</span>

				<Instruction />
			</StyledMorseTranslator>
		</ContextProvider>
	);
};

export const MorseTranslator = () => (
	<ContextProvider>
		<MorseTranslatorWrapper />
	</ContextProvider>
);
