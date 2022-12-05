<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;

class UserController extends Controller
{
    function addUser(Request $request){
        $name=$request->name;
        $email=$request->email;
        $password=bcrypt($request->password);

        $user=User::firstOrCreate(['email' => $email],
        ['name'=>$name,'password'=>$password]);

        //check if user recently created or not 
        if($user->wasRecentlyCreated){
            return response()->json([
                'status' => 'success'
            ]);
        }
        return response()->json([
            'status' => 'failed'
        ]);
    }

    function getUser(Request $request){
        $user_id=$request->id;

        $user=User::find($user_id);

        if($user){
            return response()->json([
                'status' => 'success',
                'data' => $user
            ]);
        }

        return response()->json([
            'status' => 'failed'
        ]);
    }

}
