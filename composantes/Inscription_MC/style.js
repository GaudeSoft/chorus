import { StyleSheet } from "react-native";
import { PADDIND } from "../../outils/constantes";
const styles = StyleSheet.create({
  container_pricipal: {
    flexDirection: "column",
    height: "100%",
    width: "100%",
    paddingVertical: PADDIND.vertical,
    paddingHorizontal: PADDIND.horizontal,
    backgroundColor:'#d6ccc2'
  },
  title: {
    textAlign: "center",
    // paddingVertical: 50,
    fontSize: 20,
    fontWeight: "bold",
    marginTop:80
  },
  input_form: {
    backgroundColor: "white",
    height: 45,
    marginVertical: 15,
    borderRadius: 20,
    elevation:5,
    paddingLeft:10,
  },
  btn_soumettre: {
    backgroundColor: "#d5bdaf",
    borderRadius: 50,
    height: 40,
    marginVertical: 15,
  },
  container_submit:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    height:50,
    marginVertical:20

  },
  text_submit:{
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal:10
  },
  icon_submit:{
    backgroundColor: '#d5bdaf',   
    borderRadius: 50,
    height:50,
    width: '20%',
    justifyContent:"center",
    alignItems:"center",
    marginVertical:15,
    elevation:10
  }
});

export default styles;
