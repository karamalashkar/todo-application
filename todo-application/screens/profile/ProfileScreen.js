import { RefreshControl, ScrollView, Text, View } from "react-native";
import { useEffect,useState } from "react";
import { getUser } from "../../api/getUser";
import Button from "../../components/button/Button";
import { store } from "../../redux/Store";
import {deleteUser} from "../../redux/Slices/userSlice";
import { styles } from "./style";

const ProfileScreen=()=>{
    const[name,setName]=useState('')
    const [load,setLoad]=useState(true)
    
    let userId=store.getState().user.id
    const user = async () =>{
        const response=await getUser(userId);
        setName(response.data.name)
        setLoad(false)
    }

    useEffect(()=>{
        user();
    },[])
    
    const logout = ()=>{
        store.dispatch(deleteUser())
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl 
            refreshing={load} onRefresh={user}/>} >
                <View style={styles.screen}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.button}>
                        <Button text='Logout' onPress={logout}/>
                    </View>
                </View>
        </ScrollView>
    )
}

export default ProfileScreen;