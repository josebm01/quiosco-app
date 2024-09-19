<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // Se agrega las llaves que va a retornar y que los valores
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'icono' => $this->icono
        ];
    }
}
