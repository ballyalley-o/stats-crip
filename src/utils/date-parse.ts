const dateParse = (dateString: string) => {
  const dateSplit = dateString.split('/').map((value: string): number => {
    return parseInt(value)
  })

  return new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0])
}

export default dateParse
