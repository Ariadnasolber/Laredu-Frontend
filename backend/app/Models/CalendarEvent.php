<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CalendarEvent extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'date', 'user_id'];

    // Relación con el usuario
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
