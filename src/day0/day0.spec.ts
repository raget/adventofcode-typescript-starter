import day0 from './index'
import fs from 'fs'

describe('On Day 0', () => {
  let sampleInput1: string
  let sampleInput2: string

  beforeAll(async () => {
    sampleInput1 = (await fs.promises.readFile(`./inputs/day${day0.id}/part1.sample.txt`)).toString()
    sampleInput2 = (await fs.promises.readFile(`./inputs/day${day0.id}/part2.sample.txt`)).toString()
  })

  it('part1 sample test', () => {
    expect(day0.solveForPartOne(sampleInput1)).toBe('put sample answer here')
  })

  it('part2 sample test', () => {
    expect(day0.solveForPartOne(sampleInput2)).toBe('put sample answer here')
  })
})
