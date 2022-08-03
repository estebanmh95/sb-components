/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, color, allCaps, customColor, }: Props) => JSX.Element;
