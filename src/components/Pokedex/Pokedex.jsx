import { useState } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import styles from './Pokedex.module.css';

export default function Pokedex() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchPokemon = async (e) => {
    e.preventDefault();

    const query = searchTerm.trim().toLowerCase();
    if (!query) return;

    setLoading(true);
    setError(null);
    setPokemon(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

      if (!response.ok) {
        throw new Error('not-found');
      }

      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError('Não encontramos esse Pokémon. Confira o nome ou número e tente de novo.');
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className={styles.page}>
      <div className={styles.device}>
          <div className={styles.screen}>
            <form onSubmit={searchPokemon} className={styles.form}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="nome ou número (ex: pikachu, 25)"
                className={styles.input}
              />
              <button type="submit" className={styles.button} disabled={loading}>
                {loading ? '...' : 'Buscar'}
              </button>
            </form>
            <div className={styles.resultArea}>
              {loading && <p className={styles.statusText}>Carregando...</p>}

              {error && <p className={styles.errorText}>{error}</p>}

              {!loading && !error && !pokemon && (
                <p className={styles.statusText}>Digite um nome ou número pra começar.</p>
              )}

              {pokemon && !loading && <PokemonCard pokemon={pokemon} />}
          </div>
        </div>
        <div className={styles.deviceTop}>
          <div className={styles.light} />
          <div className={styles.smallLights}>
            <div className={`${styles.smallLight} ${styles.red}`} />
            <div className={`${styles.smallLight} ${styles.yellow}`} />
            <div className={`${styles.smallLight} ${styles.green}`} />
          </div>
        </div>

      </div>
    </div>
  );
}
