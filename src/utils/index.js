import { Dimensions, Platform } from "react-native";

export const { width, height } = Dimensions.get("screen");
export const IS_ANDROID = Platform.OS === "android";
export const IS_IOS = Platform.OS === "ios";
