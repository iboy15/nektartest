import { StyleSheet } from "react-native";
import { width, height } from "../../utils";
export const styles = StyleSheet.create({
  container: {
    width,
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  tryAgainBtn: {
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "white"
  },
  tryAgainText: {
    fontWeight: "bold"
  }
});
