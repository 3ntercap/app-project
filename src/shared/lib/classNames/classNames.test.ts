import { classNames } from './classNames';
describe('classNames', () => {
    test('first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('additional params', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
    });
    test('mods', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true }, ['class1', 'class2'])).toBe(expected);
    });
    test('mods 1 of all is false', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected);
    });
    test('mods 1 of all is undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expected);
    });
});