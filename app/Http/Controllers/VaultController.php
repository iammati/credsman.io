<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVaultRequest;
use App\Http\Requests\UpdateVaultRequest;
use App\Models\Vault;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;
use Laravel\Jetstream\Jetstream;

class VaultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        $vaults = Vault::get()->all();

        return Jetstream::inertia()->render($request, 'Vaults', [
            'vaults' => $vaults,
        ]);
    }

    /**
     * Show the vault creation screen.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function create(Request $request)
    {
        return Jetstream::inertia()->render($request, 'Vaults/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreVaultRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVaultRequest $request)
    {
        $vault = new Vault();

        $vault->logo = $request->logo->storePublicly('logos', [
            'disk' => 'public',
        ]);
        $vault->name = $request->name;
        $vault->url = $request->url;
        $vault->save();

        return redirect()->route('vaults');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vault  $vault
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Vault $vault)
    {
        return Jetstream::inertia()->render($request, 'Vaults/Create', [
            'vault' => $vault,
        ])->with('datas', $vault->datas);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vault  $vault
     * @return \Illuminate\Http\Response
     */
    public function edit(Vault $vault)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateVaultRequest  $request
     * @param  \App\Models\Vault  $vault
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVaultRequest $request, Vault $vault)
    {
        $vault->update($request->validationData(), $request->all());

        if ($vault->logo instanceof UploadedFile) {
            $vault->logo = $vault->logo->storePublicly('logos', [
                'disk' => 'public',
            ]);

            $vault->save();
        }

        return redirect()->route('vaults');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vault  $vault
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vault $vault)
    {
        //
    }
}
