import { StyleSheet } from "react-native";
import { width, height } from "../../utils";
export const styles = StyleSheet.create({
  container: { width },
  todoListContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: width - 20,
    alignSelf: "center",
    backgroundColor: "white",
    marginHorizontal: 5,
    borderRadius: 5,
    elevation: 5,
    marginVertical: 3,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3
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
  todoListTitle: { flexDirection: "row", alignItems: "center" },
  titleList: { width: "85%" },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  },
  companyBadge: {
    height: 20,
    width: 20,
    borderRadius: 10,
    position: "absolute",
    right: -5,
    bottom: 0
  },
  imageListContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  }
});
