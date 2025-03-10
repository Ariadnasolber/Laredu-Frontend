<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    use HasFactory;

    protected $fillable = ['submission_id', 'score', 'feedback'];

    // Relación con la entrega (submission)
    public function submission()
    {
        return $this->belongsTo(Submission::class);
    }
}
