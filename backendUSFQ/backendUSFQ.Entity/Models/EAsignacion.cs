using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backendUSFQ.Entity.Models
{
    public class EAsignacion
    {
        [Key]
        public int AsignacionId { get; set; }
        public DateTime fechaRegistro { get; set; }


        [Column(name: "ID_ESTUDIANTE")]
        public int EstudianteId { get; set; }
        public EEstudiante? Estudiante{ get; set; }



        [Column(name: "ID_CURSO")]
        public int CursoId { get; set; }
        public ECurso? Curso{ get; set; }


         

    }
}
