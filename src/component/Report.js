import DataContext from "../Data/Context";
import { useContext } from "react";
import './Report.css'

const Report = () => {
    const {income, expenses} = useContext(DataContext)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    return (
        <div>
            <h4>BALANCE</h4>
            <h1>฿ {formatNumber((income - expenses).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>INCOME</h4>
                    <p className="report plus">฿{formatNumber(income)}</p>
                </div>
                <div>
                    <h4>EXPENSES</h4>
                    <p className="report minus">฿{formatNumber(expenses)}</p>
                </div>
            </div>
        </div>
    )
}

export default Report;