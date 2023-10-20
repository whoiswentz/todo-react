import { CSSProperties } from 'react';
import styles from './TaskCounter.module.css';

type TaskCounterProps = {
    labelText: string;
    counter: string;
    labelColor?: CSSProperties;
    spanStyle?: CSSProperties;
}

export function TaskCounter({ labelText, counter, labelColor, spanStyle }: TaskCounterProps) {
    return (
        <div className={styles.container}>
            <h3 style={labelColor}>{labelText}</h3>
            <span style={spanStyle}>{ counter }</span>
        </div>
    )
}