export function getSuccessRate(correct, wrong) {
    const result = correct / (correct + wrong) * 100

    return result
}