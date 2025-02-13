export const getPostColorFromCategory = (category: string) => {
    switch (category) {
        case "Sustainability":
            return "lime"
        case "Innovation":
            return "cyan"
        case "Security":
            return "violet"
        case "HTML":
            return "orange"
        case "CSS":
            return "darkblue"
        case "JavaScript":
            return "yellow"
        case "React":
            return "blue"
        default:
            return "fuchsia"
    }
};