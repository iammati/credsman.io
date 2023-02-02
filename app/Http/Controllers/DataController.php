<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDataRequest;
use App\Http\Requests\UpdateDataRequest;
use App\Models\Data;
use App\Models\Vault;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Crypt;

class DataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index ()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create ()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreDataRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store (StoreDataRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Data  $data
     * @return \Illuminate\Http\Response
     */
    public function show (Data $data)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Data  $data
     * @return \Illuminate\Http\Response
     */
    public function edit (Data $data)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDataRequest  $request
     * @param  \Illuminate\Support\Collection  $data
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDataRequest $request, Collection $datas)
    {
        $datas = $request->datas;
        $dataIds = collect($datas)->pluck('id');

        foreach ($dataIds as $id) {
            $id = (int)$id;
            $data = Data::find($id);

            foreach ($datas as $payloadedData) {
                if ($id === (int)$payloadedData['id']) {
                    $data->group_name = $payloadedData['group_name'];
                    $data->fields = $payloadedData['fields'];
                    $data->save();
                }
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Data  $data
     * @return \Illuminate\Http\Response
     */
    public function destroy (Request $request, Data $data)
    {
        $vault = Vault::where('id', (int) $request->vaultId)->first();
        $data->delete();

        return redirect()->route('vaults.edit', [
            'vault' => $vault,
        ]);
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function decrypt (Request $request)
    {
        $value = $request->value;

        return response(Crypt::decrypt($value));
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function encrypt (Request $request)
    {
        $value = $request->value;

        return response(Crypt::encrypt($value));
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createGroup (Request $request)
    {
        $vault = Vault::where('id', (int) $request->vault['id'])->first();

        $data = new Data();
        $data->vault_id = $vault->id;
        $data->group_name = $request->name;
        $data->save();

        return redirect()->route('vaults.edit', [
            'vault' => $vault,
        ]);
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroyGroup (Request $request)
    {
        $data = Data::where('id', (int) $request->dataId)->first();
        $vault = $data->vault;
        $data->delete();

        return redirect()->route('vaults.edit', [
            'vault' => $vault,
        ]);
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createField (Request $request)
    {
        $data = Data::where('id', (int)$request->dataId)->first();
        $fields = json_decode($data->fields, true) ?? [];

        $key = $request->key;
        $value = $request->value;
        $fields[$key] = $value;

        $fields = json_encode($fields);
        $data->fields = $fields;
        $data->save();

        return redirect()->route('vaults.edit', [
            'vault' => $data->vault,
        ]);
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroyField (Request $request)
    {
        $data = Data::where('id', (int) $request->data['dataId'])->first();
        $key = $request->data['key'];
        $fields = json_decode($data->fields, true) ?? [];

        foreach ($fields as $fieldKeyIdentifier => $field) {
            if ($fieldKeyIdentifier !== $key) {
                continue;
            }

            unset($fields[$fieldKeyIdentifier]);
        }

        $data->fields = json_encode($fields);
        $data->save();

        return redirect()->route('vaults.edit', [
            'vault' => $data->vault,
        ]);
    }
}
