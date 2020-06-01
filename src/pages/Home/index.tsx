import React from 'react'
import Styles from '../../App.scss'
import Button from '../../components/Button'
import '../../assets/styles/global.scss';
import { Link } from 'react-router-dom'

export default function App() {
    return (
        <div className={Styles.app}>
            <h1>带你深度解锁Webpack系列(进阶篇)</h1>
            <p className={Styles.hello}>Hello world!</p>
            <Link to="/chat">
                <Button onClick={() => {console.log(111)}}>登录</Button>
            </Link>
        </div>
    )
}