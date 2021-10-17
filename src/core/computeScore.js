import Config from './config'

// Practical scoring function
export default function computeScore(
  results,
  { ignoreFieldNorm = Config.ignoreFieldNorm }
) {
  results.forEach((result) => {
    let totalScore = 1

    result.matches.forEach(({ key, norm, score }) => {
      const weight = key ? key.weight : null

      totalScore *= Math.pow(
        score === 0 && weight ? 0 : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
      )
    })

    result.score = totalScore
  })
}
