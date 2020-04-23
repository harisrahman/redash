<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AccountDetailsController extends Controller
{
	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return Illuminate\Http\JsonResponse
	 */
	public function show(Request $request) : JsonResponse
	{
		$user = auth()->user();

		return response()->json([
			"name" => $user->name,
			"email" => $user->email,
			"mobile" => $user->mobile,
		]);
	}

		/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return Illuminate\Http\JsonResponse
	 */
	public function update(Request $request) : JsonResponse
	{
		return response()->json("S");
	}

}
