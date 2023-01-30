export function getSuccessRate(correct, wrong) {
    return correct / (correct + wrong) * 100
}