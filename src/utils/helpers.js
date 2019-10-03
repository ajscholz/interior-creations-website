export const onKeyPress = (e, closeHandler) => {
  if (e.keyCode === 27) {
    closeHandler()
  }
}
