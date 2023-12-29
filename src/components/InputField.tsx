// rafce
import React from 'react'
import "./styles.css"
// 定义InputField 组件，添加属性及  属性类型
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
};
const InputField = ({ todo, setTodo }: Props) => {
    return <form action="" className="input">
        <input type="input" placeholder="Enter a Task"
            className="input__box"
        />
        <button type="submit" className="input_submit">
            Go
        </button>
    </form>
}

export default InputField
