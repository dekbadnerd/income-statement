import './Form.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid, setFormValid] = useState(false)
    const inputTitle = (e) => {
        setTitle(e.target.value);
    }

    const inputAmount = (e) => {
        setAmount(e.target.value);
    }

    const saveItem = (e) => {
        e.preventDefault();
        const itemdata = {
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemdata)
        setTitle('')
        setAmount('0')
    }

    useEffect(() => {
        const checkData = title.trim().length > 0 && amount != 0
        setFormValid(checkData)
    }, [title, amount])
    

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>list name</label>
                    <input type="text" onChange={inputTitle} placeholder="enter your list name" value={title}></input>
                </div>
                <div className="form-control">
                    <label>amount</label>
                    <input type="number" onChange={inputAmount} placeholder="(+ income, - expenses)" value={amount}></input>
                </div>
                <div>
                    <button className="btn" type="submit" disabled={!formValid}>add data</button>
                </div>
            </form>
        </div>
    )
}

export default Form;