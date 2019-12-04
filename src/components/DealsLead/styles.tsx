import { StyleSheet } from "react-native";
import { width, height } from "../../utils";
export const styles = StyleSheet.create({
  container: {
    width,
    marginLeft: 5
  },
  todoTitle: {
    marginTop: 10,
    marginBottom: 2,
    color: "gray",
    marginLeft: 30
  },
  badgeContainer: {
    backgroundColor: "white",
    height: 18,
    width: 18,
    borderRadius: 9,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8
  },
  badgeText: { fontWeight: "bold", fontSize: 12 },
  todoListTitle: { flexDirection: "row", alignItems: "center" },
  dealsLeadContainer: {
    backgroundColor: "white",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 7,
    borderRadius: 5,
    elevation: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  },
  titleList: { width: "85%" },
  companyName: { width: width / 4 },
  progressbar: {
    width: 7,
    height: "100%",
    borderRadius: 5,
    borderColor: "#55AAFF",
    borderWidth: 1,
    marginLeft: 15
  },
  fillprogress: {
    borderRadius: 5,
    backgroundColor: "#55AAFF",
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0
  }
});
