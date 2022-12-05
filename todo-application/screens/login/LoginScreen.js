import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './style';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { login } from '../../api/login';
import { store } from "../../redux/Store";
import { setToken, updateUser } from "../../redux/Slices/userSlice";

const LoginScreen=()=>{
    const navigation=useNavigation();
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[errorMessage,setErrorMessage]=useState('')

    const loginUser=async()=>{
        if(!email || !password){
            setErrorMessage('Enter all required inputs')
            return null
        }

        const post={email,password};
        const result=await login(post);
        if(result.status=='error'){
            setErrorMessage('Invalid Credentials')
            return null
        }
        store.dispatch(updateUser({
            user:result.user
        }))
        store.dispatch(setToken({
            token:result.token
        }))

    }
    return(
        <View style={styles.screen}>
            <Image source={require('../.././assets/todo.png')} style={styles.image}/>
            <View style={styles.input}>
                <Text style={{color: 'red'}}>{errorMessage}</Text>
                <Input placeholder={'Email'} state={false} setValue={setEmail} setError={setErrorMessage}/>
                <Input placeholder={'Password'} state={true} setValue={setPassword} setError={setErrorMessage}/>
                <Button text={'Login'} onPress={loginUser}/>
                <Pressable onPress={()=>navigation.push('Register')}>
                    <Text>Don't have an account? Join Now</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LoginScreen;