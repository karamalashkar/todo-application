import React, { useState, useEffect } from 'react';
import { Image, View,Text } from 'react-native';
import { styles } from './style';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { register } from '../../api/register';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen=()=>{
    const navigation=useNavigation();
    const[name,setName]=useState(null)
    const[email,setEmail]=useState(null)
    const[password,setPassword]=useState(null)
    const[errorMessage,setErrorMessage]=useState('')

    const addUser=async()=>{
        if(!name || !email || !password){
            setErrorMessage('Enter all required fields')
            return null
        }
        const post={name,email,password};
        const result=await register(post);
        if(result=='failed'){
            setErrorMessage('Email already exist')
            return null
        }
        navigation.push('Login')
    }

    return(
        <View style={styles.screen}>
            <Image source={require('../.././assets/todo.png')} style={styles.image}/>
            <View style={styles.input}>
                <Text style={{color: 'red'}}>{errorMessage}</Text>
                <Input placeholder={'Name'} state={false} setValue={setName} setError={setErrorMessage}/>
                <Input placeholder={'Email'} state={false} setValue={setEmail} setError={setErrorMessage}/>
                <Input placeholder={'Password'} state={true} setValue={setPassword} setError={setErrorMessage}/>
                <Button text={'Register'} onPress={addUser}/>
            </View>
        </View>
    )
}

export default RegisterScreen;