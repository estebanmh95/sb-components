import { MyLabel, Props } from "../../components/MyLabel";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "UI/Label",
	component: MyLabel,
	argTypes: {
		color: { control: "select" },
		customColor: { control: "color" },
	},
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (props: Props) => (
	<MyLabel {...props} />
);

export const Basic = Template.bind({});
Basic.args = {
	size: "h1",
	allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
	size: "normal",
	allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
	size: "normal",
	color: "secondary",
};
export const Tertiary = Template.bind({});
Tertiary.args = {
	size: "normal",
	color: "tertiary",
};

export const Primary = Template.bind({});
Primary.args = {
	size: "normal",
	color: "primary",
};

export const CustomFontColor = Template.bind({});
Primary.args = {
	size: "h1",
};
