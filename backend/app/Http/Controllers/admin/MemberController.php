<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class MemberController extends Controller
{
    //return all members
    public function index(){
        $members = Member::orderBy('created_at','DESC')->get();
        return response()->json([
            'status'=>true,
            'data'=>$members
        ]);
    }

    //insert/store members
    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'job_title' => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>false,
                'errors'=>$validator->errors()
            ]);
        }

        $member = new Member();
        $member->name = $request->name;
        $member->job_title = $request->job_title;
        $member->linkedin_url = $request->linkedin_url;
        $member->status = $request->status;
        $member->save();

        //save temp image here
        if($request->imageId > 0){

            $tempImage = TempImage::find($request->imageId);
            if($tempImage != null){
                $extArray = explode('.',$tempImage->name);
                $ext = last($extArray);

                $fileName = strtotime('now').$member->id.'.'.$ext;

                //create small thumbnail here
                $sourcePath = public_path('uploads/temp/'.$tempImage->name);
                $destPath = public_path('uploads/members/'.$fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->coverDown(400, 500);
                $image->save($destPath);

                $member->image = $fileName;
                $member->save();

            }
        }

        return response()->json([
            'status'=>true,
            'message'=>'Member added successfully.'
        ]);

    }

    //return a single member
    public function show($id){
        $members = Member::find($id);

        if($members == null){
            return response()->json([
                'status'=>false,
                'errors'=>'member not found'
            ]);
        }

        return response()->json([
            'status'=>true,
            'data'=>$members
        ]);
    }

    //update a single member data
    public function update(){

    }

    //delete a member from db
    public function destroy(){

    }
}
