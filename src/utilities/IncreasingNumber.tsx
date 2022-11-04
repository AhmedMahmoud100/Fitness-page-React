import React from 'react'

export default function IncreasingNumber(maxNumber: number, category: number, setcategory: React.Dispatch<React.SetStateAction<number>>) {
  // make the count start from the initial value of the categorystate
  let i = category

  let interval = setInterval(function () {
    i++
    setcategory(i)
    if (i > maxNumber - 1) clearInterval(interval);
  }, 40);
}