import styles from './StatBar.module.css';

export default function StatBar({ label, value, color }) {
    const percent = Math.min(100, (value / 150) * 100);
    return (
        <div>
            <div className={styles.row}>
            <span className={styles.label}>{label}</span>
            <div className={styles.track}>
                <div
                className={styles.fill}
                style={{ width: `${percent}%`, background: color }}
                />
            </div>
            <span className={styles.value}>{value}</span>
            </div>
        </div>
    );
}