<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'assignment_id', 'file_path', 'submitted_at'];

    // Relación con la tarea
    public function assignment()
    {
        return $this->belongsTo(Assignment::class);
    }

    // Relación con el usuario (estudiante)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relación con la calificación
    public function grade()
    {
        return $this->hasOne(Grade::class);
    }
}
