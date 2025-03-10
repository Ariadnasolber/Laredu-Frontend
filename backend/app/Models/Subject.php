<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'course_id', 'teacher_id'];

    // Relación con el curso
    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    // Relación con el profesor
    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    // Relación con asignaciones/tareas
    public function assignments()
    {
        return $this->hasMany(Assignment::class);
    }
}
