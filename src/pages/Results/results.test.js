import { formatJobList } from "./index";
import { formatFetchParams } from "./index";

describe("la fonction formatJobList", ()=>{
    test('Ceci est mon premier test', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    test("ne met pas de virgule pour le dernier élément", ()=>{
        const expectedState = "item3"
        expect(formatJobList("item3", 3, 2)).toEqual(expectedState)
    })
})
describe('The formatFetchParams function', () => {
    it.only('should use the right format for param', () => {
      const expectedState = 'a1=answer1'
      expect(formatFetchParams({ 1: 'answer1' })).toEqual(expectedState)
    })
    it.only('should concatenate params with an &', () => {
      const expectedState = 'a1=answer1&a2=answer2'
      expect(formatFetchParams({ 1: 'answer1', 2: 'answer2' })).toEqual(expectedState)
    })
})

