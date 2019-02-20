<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Registros;
use Illuminate\Support\Facades\Storage;
use Log;

class RegistrosControllador extends Controller
{
    public function index() {
      
        return Registros::all();
    }

    public function cadastro(Request $request) {
        $reg = new Registros();
        $path = $request->files('arquivo')->store('imagens', 'public');

        $reg->nome = $request['nome'];
        $reg->email = $request['email'];
        $reg->titulo = $request['titulo'];
        $reg->subtitulo = $request['subtitulo'];
        $reg->mensagem = $request['mensagem'];
        $reg->arquivo = $path;
        $reg->likes = 0;

        $reg->save();
        return response($reg,200);
    }

    public function deleteRegistro($id) {
        $reg = Registros::find($id);
        if(isset($reg)) {
            Storage::disk('public')->delete($post->arquivo);
            $reg->delete();
            return 204;
        }

        return response('Arquivo não encontrado', 404);
    }

    public function like($id) {
        $reg = Registros::find($id);
        if(isset($reg)) {
            $reg->likes++;
            $reg->save();
            return $post;
        }

        return response('Registro não encontrado', 404);
    }
}
