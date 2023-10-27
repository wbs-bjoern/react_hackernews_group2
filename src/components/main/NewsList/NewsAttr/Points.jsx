export default function Points({score, showPoints}) {
    if (showPoints && score) {
        return score == 1 ? score + " point " : score + " points "
    }
}