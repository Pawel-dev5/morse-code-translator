// CONSTANS
import { morseTable } from 'components/constans/morseTable';

// STYLES
import { StyledInstrunctionWrapper, StyledAlphabetWrapper } from 'components/sections/Styles';

export const Instruction = () => (
	<StyledInstrunctionWrapper>
		<h3>Instrukcja:</h3>
		<span>
			Kliknij przycisk aby napisać . <br />
			Przytrzymaj przycisk aby napisać -
			<br />
			<br />
			lub
			<br />
			<br />
			Kliknij Spację aby napisać . <br />
			Kliknij B aby napisać -
		</span>

		<h3>Alfabet</h3>
		{Object.entries(morseTable).map(([key, value]) => (
			<StyledAlphabetWrapper key={key}>
				<span>{value}</span>
				<span>{key}</span>
			</StyledAlphabetWrapper>
		))}
	</StyledInstrunctionWrapper>
);
