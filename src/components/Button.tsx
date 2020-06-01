import React from 'react'

import Styles from './Button.scss'

interface ButtonProps {
    /** 类型: primary / danger */
    type?: string;
    /** 按钮文本 */
    children: string;
    className?: string;
    /** 点击事件 */
    onClick: () => void
}

function Button (props: ButtonProps) {
    const { children, onClick } = props
    return (
        <div>
            <button
                className={Styles['button']}
                type="button"
                onClick={onClick}
            >
                <span>{children}</span>
            </button>
        </div>
    )
}

Button.defaultProps = {
    type: 'primary',
}

export default Button
