export default function Comments({showComments, kids}) {
    if (showComments) {
        if (kids) {
            return kids.length == 1 ? "| " + kids.length + " comment" : "| " + kids.length + " comments"
        } else {
            return "| discuss"
        }
    }
}
