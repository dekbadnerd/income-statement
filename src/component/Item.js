import './Item.css'

const Item = (props) => {
    const { title, amount } = props
    const status = amount < 0 ? "expense" : "income"
    const sign = amount < 0 ? "-" : "+"
    return (
        <li className={status}>{title} <span>{sign}{Math.abs(amount)}</span></li>
    )
}

export default Item