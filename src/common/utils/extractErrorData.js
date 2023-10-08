

export const extractValidationData = (resultValidation) => {
  let errorMessage
  let data
  const hasErrror = !resultValidation.success

  if (hasErrror) errorMessage = JSON.parse(resultValidation.error.message)

  if (!hasErrror) data = resultValidation.data

  return {
    hasErrror,
    errorMessage,
    data
  }
}