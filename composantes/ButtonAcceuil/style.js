import { StyleSheet } from "react-native";
import { COLORS } from "../../outils/constantes";
const styles = StyleSheet.create({
  container_pricipal:{
    justifyContent:"center",
    alignItems:"center",
    display:'flex',
    flexDirection:'column',
    height:'100%',
    width:'100%',
    backgroundColor:'#d6ccc2'
  },

  button: {
    backgroundColor: '#d5bdaf',   
    borderRadius: 50,
    height:50,
    width: '80%',
    justifyContent:"center",
    alignItems:"center",
    marginVertical:15
  },

  text: {
    color: "black",
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 18
  },
  main_title:{
    fontSize:30,
    fontWeight:"bold",
    marginVertical:10,
    color: COLORS.principal
  },
  secondary_title:{
    fontSize:20,
    fontWeight:"bold",
    marginVertical:10,
    color: 'black'
  }
});
export default styles;