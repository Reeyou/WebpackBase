import React from 'react'
import Styles from './App.scss'
import Button from './components/Button'

export default function App() {
    return (
        <div className={Styles.app}>
            <p className={Styles.hello}>Hello React!</p>
            <Button onClick={() => {console.log(111)}}>Button Component</Button>
        </div>
    )
}

