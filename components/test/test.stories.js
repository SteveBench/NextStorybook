import Button from './index';

export default {
    title: "My First Test" 
}

const Template = arguments_ => <Button {...arguments_} />

export const Primary = Template.bind({})

export const Secondary = Template.bind({})

Primary.args ={
    size: "h-10 w-80",
    children: "Secondary",
    testing: "meh",
}

Secondary.args ={
    size: "h-10 w-80",
    children: "Secondavvvvvgy",
    testing: "meh",
}