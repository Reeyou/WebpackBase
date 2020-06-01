import React from 'react'
import Styles from '../../App.scss'
import Button from '../../components/Button'
import '../../assets/styles/global.scss'
import { Link } from 'react-router-dom'

export default function App() {
    return (
        <div className={Styles.app}>
            <h1>Chat聊天室</h1>
            <p className={Styles.hello}>develop with react/react-native by Reeyou!</p>
            <Link to="/todo">
                <Button onClick={() => {console.log(111)}}>聊天</Button>
            </Link>
        </div>
    )
}