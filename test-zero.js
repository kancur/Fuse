const Fuse = require('./dist/fuse')

const options = {
  // isCaseSensitive: false,
  includeScore: true,
  // shouldSort: true,
  // includeMatches: false,
  findAllMatches: true,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.3,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  includeRefIndex: false,
  keys: ['title']
}

const list = [
  { title: 'kremnica' },
  { title: 'kremnica' },
  { title: 'kremnicak' },
  { title: 'kremnicakasdfgjkagdnag' },
  { title: 'kremnica je super' },
  { title: 'kremnic' },
  { title: 'random' }
]

const fuse = new Fuse(list, options)

// Change the pattern
const pattern = 'kremnica'
console.log('QUERY ==========>', pattern)

console.log(fuse.search(pattern))
