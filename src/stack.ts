/**
 * This class creates an integer stack
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-3
 */

class Stack {
  stackArray: number[] = []

  push (pushedNumber: number): void {
    // add a number to the array
    this.stackArray.push(pushedNumber)
  }

  showStack (): void {
    console.log(this.stackArray)
  }
}
export = Stack
