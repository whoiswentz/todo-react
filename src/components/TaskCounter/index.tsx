import { CSSProperties } from 'react';
import styles from './TaskCounter.module.css';

type TaskCounterProps = {
    labelText: string;
    counter: number;
    labelColor?: CSSProperties;
}

export function TaskCounter({ labelText, counter, labelColor }: TaskCounterProps) {
    return (
        <div className={styles.container}>
            <h3 style={labelColor}>{labelText}</h3>
            <span>{ counter }</span>
        </div>
    )
}