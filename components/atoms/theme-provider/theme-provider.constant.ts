import { themes } from '@lib/constants';

export const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => console.log('test')
};
