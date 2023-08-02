import Toast from "react-native-simple-toast";

//we need to use another approach to handling this.
let TOAST_SHOW = true;
/**
 * Function will show the Toast
 * @param text
 * @param duration
 * 0 - Short duration, 1 - Long duration
 * @param gravity
 * 0 - Toast at Bottom, 1 - Toast at Center, 2 - Toast at Top
 * @returns void
 */
export const showToast = (
  text: string = "",
  duration: number = 0,
  gravity: number = 0,
) => {
  let gravityNum: any;

  if (!TOAST_SHOW) return;

  switch (gravity) {
    case 0:
      gravityNum = Toast.BOTTOM;
      break;
    case 1:
      gravityNum = Toast.CENTER;
      break;
    default:
      gravityNum = Toast.TOP;
  }

  TOAST_SHOW = false;

  Toast.showWithGravity(text, duration, gravityNum);

  //currently using 1000 millisecs for short duration
  setTimeout(() => {
    TOAST_SHOW = true;
  }, 1000);
};
