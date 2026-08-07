import StatBar from '../StatBar.jsx/StatBar';
import { TYPE_COLORS, STAT_LABELS } from '../../constants/pokemonTypes';
import styles from './PokemonCard.module.css';

export default function PokemonCard({ pokemon }) {
    const mainType = pokemon.types[0]?.type?.name || 'normal';
    const accentColor = TYPE_COLORS[mainType] || '#A8A878';

    return (
        <div className={styles.card}>
            <div className={styles.spriteWrap} style={{ background: `${accentColor}22` }}>
                <img
                src={pokemon.sprites?.front_default}
                alt={pokemon.name}
                className={styles.sprite}
                />
            </div>
            <p className={styles.number}>#{String(pokemon.id).padStart(3, '0')}</p>
            <h2 className={styles.name}>{pokemon.name}</h2>
            <div className={styles.typeRow}>
                {pokemon.types.map((t) => (
                <span
                    key={t.type.name}
                    className={styles.typeBadge}
                    style={{ background: TYPE_COLORS[t.type.name] || '#A8A878' }}
                >
                    {t.type.name}
                </span>
                ))}
            </div>
            <div className={styles.statsBlock}>
                {pokemon.stats.map((s) => (
                <StatBar
                    key={s.stat.name}
                    label={STAT_LABELS[s.stat.name] || s.stat.name}
                    value={s.base_stat}
                    color={accentColor}
                />
                ))}
            </div>
        </div>
  );
}