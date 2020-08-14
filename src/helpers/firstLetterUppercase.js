export default function (word) {
    if (!word || !word.length) {
        return word;
    }

    const [first] = word;
    return `${first.toUpperCase()}${word.slice(1)}`;
}
