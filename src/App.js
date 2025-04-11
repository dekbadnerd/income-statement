import Transaction from "./component/Transaction"
import './App.css'
import Form from "./component/Form";
import { useState, useEffect } from "react";
import DataContext from "./Data/Context";
import Report from "./component/Report";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
 
function App() {
  const style = { color: 'red', textAlign: "center", fontSize: '1.5rem' }

  const [items, setItems] = useState([])

  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpenses, setReportExpenses] = useState(0)

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  }

  useEffect(() =>  {
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0).toFixed(2)
    const expenses = (-1 * (amounts.filter(element => element < 0).reduce((total, element) => total += element, 0))).toFixed(2)
    
    setReportIncome(income)
    setReportExpenses(expenses)
  },[items, reportIncome, reportExpenses])

  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expenses : reportExpenses,
      }
    }>
      <div className="container">
        <h1 style={style}>Income Statement Program</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Account Info</Link>
              </li>
              <li>
              <Link to="/insert">Save Data</Link>
              </li>
            </ul>

            <Routes>
              <Route path="/" element={<Report />} />
              <Route path="/insert" element={
                  <>
                    <Form onAddItem={onAddNewItem} />
                    <Transaction items={items} />
                  </>
                }/>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  )
}

export default App;
