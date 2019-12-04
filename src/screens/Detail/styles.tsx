import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDEEFF"
  },
  scrollViewContainer: { flex: 1 },
  activityIndicator: { alignSelf: "center", marginTop: 40 },
  bee: {
    height: 30,
    width: 30,
    marginLeft: "auto",
    marginTop: 15,
    marginRight: 10
  },
  carouselTitle: {
    top: 2,
    color: "gray",
    marginLeft: 30
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
  badgeText: { fontWeight: "bold" },
  todoListTitle: { flexDirection: "row", alignItems: "center" }
});
