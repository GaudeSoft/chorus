import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollableListItem: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginRight: 15,
    backgroundColor: "white",
    elevation: 1,
    borderRadius:5,
    marginTop:15,
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subText: {
    marginTop: 10,
    fontSize: 12,
  },
});
export default styles;
