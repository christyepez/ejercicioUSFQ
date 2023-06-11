using backendUSFQ.Entity.Models.Dto;
using backendUSFQ.Entity.Models;
using Microsoft.AspNetCore.Mvc;
using backendUSFQ.Domain.Interfaces;

namespace backendUSFQ.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class EstudianteController : Controller
    {


        private readonly IEstudiante _estudianteRepositorio;
        protected ResponseDto _response;

        public EstudianteController(IEstudiante estudianteRepositorio)
        {
            _estudianteRepositorio = estudianteRepositorio;
            _response = new ResponseDto();
        }


        // GET: api/Estudiante
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EEstudiante>>> GetEstudiante()
        {
            try
            {
                var lista = await _estudianteRepositorio.GetEstudiante();
                _response.Result = lista;
                _response.DisplayMessage = "Lista de Estudiante";
            }
            catch (Exception ex)
            {

                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }

            return Ok(_response);
        }

        // GET: api/Estudiante/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EEstudiante>> GetEstudiante(int id)
        {
            var estudiante = await _estudianteRepositorio.GetEstudianteById(id);
            if (estudiante == null)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Estudiante No Existe";
                return NotFound(_response);
            }
            _response.Result = estudiante;
            _response.DisplayMessage = "Informacion del Estudiante";
            return Ok(_response);
        }

        // PUT: api/Estudiante/5 
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstudiante(int id, EstudianteDto estudianteDto)
        {
            try
            {
                EstudianteDto model = await _estudianteRepositorio.CUpdateEstudiante(estudianteDto);
                _response.Result = model;
                return Ok(_response);
            }
            catch (Exception ex)
            {

                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al Actualizar el Registro";
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }
        }

        // POST: api/Estudiante 
        [HttpPost]
        public async Task<ActionResult<EEstudiante>> PostEstudiante(EstudianteDto estudianteDto)
        {
            try
            {
                EstudianteDto model = await _estudianteRepositorio.CUpdateEstudiante(estudianteDto);
                _response.Result = model;
                return CreatedAtAction("GetEstudiante", new { id = model.EstudianteId }, _response);
            }
            catch (Exception ex)
            {

                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al Grabar el Registro";
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }

        }

        // DELETE: api/Estudiante/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteestudiante(int id)
        {
            try
            {
                bool estaEliminado = await _estudianteRepositorio.DeleteEstudiante(id);
                if (estaEliminado)
                {
                    _response.Result = estaEliminado;
                    _response.DisplayMessage = "Estudiante Eliminado con Exito";
                    return Ok(_response);
                }
                else
                {
                    _response.IsSuccess = false;
                    _response.DisplayMessage = "Error al Eliminar Estudiante";
                    return BadRequest(_response);
                }
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }
        }

    }
}
