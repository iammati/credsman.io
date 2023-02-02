<?php

namespace App\Http\Controllers;

use App\Credsman;
use App\Http\Requests\StoreVaultRequest;
use App\Http\Requests\UpdateVaultRequest;
use App\Models\Vault;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Inertia\Inertia;

class VaultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index ()
    {
        $vaults = Vault::get()->all();

        return Inertia::render('Vaults', [
            'vaults' => $vaults,
            'isAdmin' => Auth::user()->isAdmin(),
            'copyright' => Credsman::getCopyright(),
        ]);
    }

    /**
     * Show the vault creation screen.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function create ()
    {
        return Inertia::render('Vaults/Create', [
            'isAdmin' => Auth::user()->isAdmin(),
            'copyright' => Credsman::getCopyright(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreVaultRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store (StoreVaultRequest $request)
    {
        $vault = new Vault();

        if ($request->logo) {
            $vault->logo = $request->logo->storePublicly('logos', [
                'disk' => 'public',
            ]);
        }

        $vault->name = $request->name;
        $vault->url = $request->url;
        $vault->save();

        return redirect()->route('vaults.edit', [
            'vault' => $vault,
            'isAdmin' => Auth::user()->isAdmin(),
            'copyright' => Credsman::getCopyright(),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vault  $vault
     * @return \Illuminate\Http\Response
     */
    public function edit (Request $request, Vault $vault)
    {
        // // Encryption of the fields' values
        // foreach ($vault->datas as $key => $data) {
        //     $fields = json_decode($data->fields, true) ?? null;

        //     if ($fields === null) {
        //         continue;
        //     }

        //     foreach ($fields as $fieldKey => $field) {
        //         $fields[$fieldKey] = Crypt::encrypt($field);
        //     }

        //     $vault->datas[$key]->fields = json_encode($fields);
        // }

        return Inertia::render('Vaults/Create', [
            'vault' => $vault,
            'isAdmin' => Auth::user()->isAdmin(),
            'copyright' => Credsman::getCopyright(),
        ])->with('datas', $vault->datas);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vault  $vault
     * @return \Illuminate\Http\Response
     */
    public function show (Vault $vault)
    {
        // // Encryption of the fields' values
        // foreach ($vault->datas as $key => $data) {
        //     $fields = json_decode($data->fields, true) ?? null;

        //     if ($fields === null) {
        //         continue;
        //     }

        //     foreach ($fields as $fieldKey => $field) {
        //         $fields[$fieldKey] = Crypt::encrypt($field);
        //     }

        //     $vault->datas[$key]->fields = json_encode($fields);
        // }

        return Inertia::render('Vaults/Show', [
            'vault' => $vault,
            'isAdmin' => Auth::user()->isAdmin(),
            'copyright' => Credsman::getCopyright(),
        ])->with('datas', $vault->datas);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVaultRequest  $request
     * @param  \App\Models\Vault  $vault
     * @return \Illuminate\Http\Response
     */
    public function update (UpdateVaultRequest $request, Vault $vault)
    {
        $vault->update($request->validationData(), $request->all());

        if ($vault->logo instanceof UploadedFile) {
            $vault->logo = $vault->logo->storePublicly('logos', [
                'disk' => 'public',
            ]);

            $vault->save();
        }

        // return redirect()->route('vaults');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vault  $vault
     * @return \Illuminate\Http\Response
     */
    public function destroy (Vault $vault)
    {
        $vault->delete();

        return redirect()->route('vaults');
    }
}
