const test = require('tape')

const index = require('.')

const arrayToList = require('../List/arrayToList')
const eitherToAsync = require('../Async/eitherToAsync')
const eitherToFirst = require('../First/eitherToFirst')
const eitherToLast = require('../Last/eitherToLast')
const eitherToMaybe = require('../Maybe/eitherToMaybe')
const eitherToResult = require('../Result/eitherToResult')
const firstToAsync = require('../Async/firstToAsync')
const firstToEither = require('../Either/firstToEither')
const firstToLast = require('../Last/firstToLast')
const firstToMaybe = require('../Maybe/firstToMaybe')
const firstToResult = require('../Result/firstToResult')
const lastToAsync = require('../Async/lastToAsync')
const lastToEither = require('../Either/lastToEither')
const lastToFirst = require('../First/lastToFirst')
const lastToMaybe = require('../Maybe/lastToMaybe')
const lastToResult = require('../Result/lastToResult')
const listToArray = require('../List/listToArray')
const maybeToAsync = require('../Async/maybeToAsync')
const maybeToEither = require('../Either/maybeToEither')
const maybeToFirst = require('../First/maybeToFirst')
const maybeToLast = require('../Last/maybeToLast')
const maybeToResult = require('../Result/maybeToResult')
const resultToAsync = require('../Async/resultToAsync')
const resultToEither = require('../Either/resultToEither')
const resultToFirst = require('../First/resultToFirst')
const resultToLast = require('../Last/resultToLast')
const resultToMaybe = require('../Maybe/resultToMaybe')
const writerToPair = require('../Pair/writerToPair')

test('logic entry', t => {
  t.equal(index.arrayToList, arrayToList, 'provides the arrayToList transform')
  t.equal(index.eitherToAsync, eitherToAsync, 'provides the eitherToAsync transform')
  t.equal(index.eitherToFirst, eitherToFirst, 'provides the eitherToFirst transform')
  t.equal(index.eitherToLast, eitherToLast, 'provides the eitherToLast transform')
  t.equal(index.eitherToMaybe, eitherToMaybe, 'provides the eitherToMaybe transform')
  t.equal(index.eitherToResult, eitherToResult, 'provides the eitherToResult transform')
  t.equal(index.firstToAsync, firstToAsync, 'provides the firstToAsync transform')
  t.equal(index.firstToEither, firstToEither, 'provides the firstToEither transform')
  t.equal(index.firstToLast, firstToLast, 'provides the firstToLast transform')
  t.equal(index.firstToMaybe, firstToMaybe, 'provides the firstToMaybe transform')
  t.equal(index.firstToResult, firstToResult, 'provides the firstToResult transform')
  t.equal(index.lastToAsync, lastToAsync, 'provides the lastToAsync transform')
  t.equal(index.lastToEither, lastToEither, 'provides the lastToEither transform')
  t.equal(index.lastToFirst, lastToFirst, 'provides the lastToFirst transform')
  t.equal(index.lastToMaybe, lastToMaybe, 'provides the lastToMaybe transform')
  t.equal(index.lastToResult, lastToResult, 'provides the lastToResult transform')
  t.equal(index.listToArray, listToArray, 'provides the listToArray transform')
  t.equal(index.maybeToAsync, maybeToAsync, 'provides the maybeToAsync transform')
  t.equal(index.maybeToEither, maybeToEither, 'provides the maybeToEither transform')
  t.equal(index.maybeToFirst, maybeToFirst, 'provides the maybeToFirst transform')
  t.equal(index.maybeToLast, maybeToLast, 'provides the maybeToLast transform')
  t.equal(index.maybeToResult, maybeToResult, 'provides the maybeToResult transform')
  t.equal(index.resultToAsync, resultToAsync, 'provides the resultToAsync transform')
  t.equal(index.resultToEither, resultToEither, 'provides the resultToEither transform')
  t.equal(index.resultToFirst, resultToFirst, 'provides the resultToFirst transform')
  t.equal(index.resultToLast, resultToLast, 'provides the resultToLast transform')
  t.equal(index.resultToMaybe, resultToMaybe, 'provides the resultToMaybe transform')
  t.equal(index.writerToPair, writerToPair, 'provides the writerToPair transform')

  t.end()
})
