export interface GridProps<T> {
    items: Array<T>;
    Component: (arg: T) => JSX.Element;
    itemSize?: 'sm' | 'md';
}
