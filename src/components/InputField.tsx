// rafce
import React, { useRef } from 'react'
import "./styles.css";
// 定义InputField 组件，添加属性及  属性类型
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
};
//  这样 使用                                    : Props
const InputField = ({ todo, setTodo, handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return <form action="" className="input" onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
    }}>
        <input
            ref={inputRef}
            type="input" placeholder="Enter a Task"
            className="input__box"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="input_submit">
            Go
        </button>
    </form>
}

export default InputField
