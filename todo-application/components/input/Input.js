import { Text, TextInput } from "react-native";
import { styles } from "./style";

const Input = (props) =>{
    return(
        <TextInput style={styles.input} 
        placeholder={props.placeholder}
        selectionColor={'red'}
        secureTextEntry={props.state} 
        onChangeText={ text => props.setValue(text)}
        onFocus={()=>props.setError('')}/>
    )
}

export default Input;