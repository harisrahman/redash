<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('API')->name('api.')->group(function ()
{
	Route::middleware('auth')->group(function ()
	{
		Route::prefix('account-setting')->name('account-setting.')->group(function ()
		{
			Route::get('index', 'AccountSettingController@index')->name('index');
			
			Route::patch('password', 'PasswordController@update')->name('password.update');

			Route::get('account-details', 'AccountDetailsController@show')->name('account-details.show');

			Route::patch('account-details', 'AccountDetailsController@update')->name('account-details.update');

	// Route::resource('password', 'AccountSettingController');


	
		});
	});
});

