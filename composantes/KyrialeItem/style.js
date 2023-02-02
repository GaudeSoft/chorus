import { StyleSheet } from "react-native";
import { COLORS } from "../../outils/constantes";
import { PADDIND } from "../../outils/constantes";

// const styles = StyleSheet.create({
//   container: {
//   //  flexDirection: "row",
//   //   flexWrap:'wrap',
//   borderColor:'orange',
//     borderWidth:2,
//     borderStyle: 'solid',
    
//   },
//   text: {
//     marginTop: 50,
//     color: "#2699fb",
//     fontSize: 25,
//     lineHeight: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   title_space_between: {
//     marginTop: 15,

//     // justifyContent: "center",
//   },
//   titleBold: {
//     fontWeight: "bold",
//     textAlign: "center",
//     fontSize:25,
//     marginTop:25
//   },
//   doctorsContainer: {
//     // paddingHorizontal: PADDIND.horizontal,
//     // paddingVertical: PADDIND.vertical,
    

//   },

//   doctorsCard: {
//     flex: 1,
//     backgroundColor: "#d5bdaf",
//     // elevation: 5,
//     padding: 10,
//     // paddingHorizontal: PADDIND.horizontal,
//     // paddingVertical: PADDIND.vertical,
//     marginBottom: 15,
//     borderRadius: 5,
//     borderColor:'red',
//     borderWidth:2,
//     borderStyle: 'solid',
//     width:'45%'
//   },
//   doctorImg: {
//     width: 80,
//     height: 80,
//     borderRadius: 80 / 2,
//     marginRight: 15,
//   },
//   doctorInfo: {
//     // flexDirection: "column",
//     // flexWrap:'wrap'
//   },
//   doctorName: {
//     fontWeight: "bold",
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   doctorSpec: {
//     padding: 5,
//     // paddingHorizontal: PADDIND.horizontal,
//     // borderRadius: 15,
//     fontSize: 14,
//     color: "red",
//     fontStyle:'italic'
//   },
// });

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
  kyrieContainer: {
    paddingHorizontal: PADDIND.horizontal,
    paddingVertical: PADDIND.vertical,
  },

  kyrieCard: {
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

  kyrieInfo: {
    flexDirection: "column",
    flexWrap:'wrap'
  },
  kyrieTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 15,
  }
});
export default styles;
