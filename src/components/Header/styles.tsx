import { StyleSheet } from "react-native";
import { width, height } from "../../utils";
export const styles = StyleSheet.create({
  container: {
    width,
    height: 55,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 5
  },
  backBtn: { padding: 5, marginLeft: 15 },
  backIcon: { height: 20, width: 20 },
  bee: {
    height: 25,
    width: 25,
    marginLeft: "auto",
    bottom: 5,
    marginRight: 5
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    marginLeft: 15,
    marginRight: 10
  }
});
