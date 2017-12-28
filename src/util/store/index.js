import storeDev from './store.dev';
import storeProduction from './store.prod';

const store = process.env.NODE_ENV === 'production' ? storeProduction : storeDev;

export default store;
