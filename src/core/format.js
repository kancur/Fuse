import Config from './config'
import { transformMatches, transformScore } from '../transform'

export default function format(
  results,
  docs,
  {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore,
    includeRefIndex = Config.includeRefIndex
  } = {}
) {
  const transformers = []

  if (includeMatches) transformers.push(transformMatches)
  if (includeScore) transformers.push(transformScore)

  return results.map((result) => {
    const { idx } = result

    const data = {
      item: docs[idx],
      ...(includeRefIndex && {refIndex: idx})
    }

    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data)
      })
    }

    return data
  })
}
