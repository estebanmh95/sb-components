import "./mylabel.css";

export interface Props {
	/**
	 * Label of the html tag
	 */
	label: string;

	/**
	 * Size of the html tag
	 */
	size: "normal" | "h3" | "h2" | "h1";
	/**
	 * All caps?
	 */
	allCaps: boolean;
	/**
	 * Color of the text
	 */
	color: "primary" | "secondary" | "tertiary";

	/**
	 * Color of the text
	 */
	customColor?: string;
}

export const MyLabel = ({
	label = "No Label",
	size = "normal",
	color = "primary",
	allCaps = false,
	customColor,
}: Props) => {
	return (
		<span
			className={`label ${size} text-${color}`}
			style={{ color: customColor }}
		>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};

export default MyLabel;
