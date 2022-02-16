import { createContext, useState } from "react";

const ColorContext = createContext({ 
    state: { color: 'black', subcolor: 'red'},
    actions: {
        setColor: () => {},
        setSubcolor: () => {}
    }
}); // context 생성


const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: { color, subcolor},
        actions:  { setColor, setSubcolor}
    };

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

//const ColorConsumer = ColorContext.Consumer 과 같은의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvicer 와 colorConsumer 내보내기
export { ColorProvider, ColorConsumer };


export default ColorContext;
