import { StyleSheet } from "react-native";
import { COLORS } from "../../outils/constantes";
import { PADDIND } from "../../outils/constantes";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: "#2699fb",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 50,
    color: "#2699fb",
    fontSize: 25,
    lineHeight: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  title_space_between: {
    marginTop: 15,

    // justifyContent: "center",
  },
  titleBold: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize:25,
  
  },
  offrandeContainer: {
    paddingHorizontal: PADDIND.horizontal,
    paddingVertical: PADDIND.vertical,
  },

  offrandeCard: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#d5bdaf",
    elevation: 5,
    padding: 10,
    // paddingHorizontal: PADDIND.horizontal,
    // paddingVertical: PADDIND.vertical,
    marginBottom: 15,
    borderRadius: 5,
  },

  offrandeInfo: {
    flexDirection: "column",
    flexWrap:'wrap'
  },
  offrandeTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 15,
    fontFamily:"Tangerine-Bold"
  }
});
export default styles;
