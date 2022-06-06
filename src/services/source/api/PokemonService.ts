import httpClient from '@src/services/client/httpClient';

export async function getPokemons(name: string) {
  try {
    const params = name ? { name } : {};

    const response = await httpClient({
      url: 'pokemon',
      method: 'GET',
      params,
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function getPokemon(name: string) {
  try {
    const params = name ? { name } : {};

    const response = await httpClient({
      url: `pokemon/${name}`,
      method: 'GET',
      params,
    });

    return response;
  } catch (error) {
    throw error;
  }
}
