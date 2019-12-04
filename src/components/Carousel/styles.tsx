import { StyleSheet } from "react-native";
import { width, height } from "../../utils";
export const styles = StyleSheet.create({
  container: { width },
  carousel: {
    width: width - 80,
    height: height / 6,
    backgroundColor: "white",
    marginLeft: 10,
    borderRadius: 5,
    elevation: 5,
    marginVertical: 10,
    padding: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3
  },
  wellcomeText: {
    color: "gray",
    marginLeft: 30
  },
  progressbar: {
    width: "100%",
    height: 7,
    borderRadius: 5,
    borderColor: "#55AAFF",
    borderWidth: 1,
    marginTop: "auto"
  },
  fillprogress: {
    borderRadius: 5,
    backgroundColor: "#55AAFF",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0
  }
});
