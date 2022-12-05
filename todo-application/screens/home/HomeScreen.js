import { RefreshControl,ScrollView, Text,View } from "react-native";
import { styles } from "./style";
import TodoCard from "../../components/todoCard/TodoCard";
import { getTask } from "../../api/getTask";
import { useEffect,useState } from "react";

const HomeScreen=()=>{
    const [task,setTask]=useState('')
    const [load,setLoad]=useState(true)

    const tasks=async () =>{
        const response=await getTask();
        setTask(response.data)
        setLoad(false)
    }

    useEffect(()=>{
        tasks();
    },[])

    return(
        <View style={styles.screen}>
            <View style={styles.head}>
                <Text style={styles.title}>To-do List</Text>
            </View>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} refreshControl={<RefreshControl 
            refreshing={load} onRefresh={tasks}/>} >
                {Object.values(task).map((task,index)=>{
                    return(
                        <TodoCard key={index} image={task.image} title={task.name} due={task.due} 
                        description={task.description} />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default HomeScreen;
