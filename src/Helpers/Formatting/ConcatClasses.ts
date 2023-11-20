export function ConcatClasses(...classNames : (string | undefined)[]) {
    return classNames.filter((className) => !!className).join(' ');
}