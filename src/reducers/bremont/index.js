import initialState from './data';

export default function reducer (state = initialState, action) {
    const { type } = action;

    switch (type) {

        default: return state;
    }
}