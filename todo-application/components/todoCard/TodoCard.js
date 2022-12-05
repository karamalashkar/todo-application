import { Image,Text,View } from "react-native";
import { styles } from "./style";
import { imageBaseURL } from "../../api/base";

const TodoCard=(props)=>{
    return(
        <View style={styles.card}>
            <View style={styles.head}>
                <View style={styles.taskImage}>
                    <Image source={{uri: `${imageBaseURL}${props.image}`}} style={styles.image}/>
                </View>
                <View style={styles.taskInfo}>
                    <View style={styles.group}>
                        <Text style={styles.text}>{props.title}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.taskDate}>
                <View style={styles.group}>
                    <Text style={styles.due}>Due Date</Text>
                    <Text style={styles.date}>{props.due}</Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.description}>{props.description}</Text>
            </View>
        </View>
    )
}

export default TodoCard;