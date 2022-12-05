<?php

namespace App\Http\Controllers;
use App\Models\Task;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    function addTask(Request $request){
        $task=new Task;

        $base64Image = explode(";base64,", $request->image);
        $explodeImage = explode("image/", $base64Image[0]);
        $imageType = $explodeImage[1];
        $image_base64 = base64_decode($base64Image[1]);
        $imageName = $request->name.'.'.'png';
        \File::put(public_path('assets'). '/' . $imageName, base64_decode($base64Image[1]));
        $image=$imageName;

        $task->name=$request->name;
        $task->due=$request->due;
        $task->description=$request->description;
        $task->image=$image;

        $task->save();
        return response()->json([
            'status' => 'success'
        ]);
    }

    function getTask(){
        $response=Task::all();

        return response()->json([
            'data' => $response
        ]);
    }
}
