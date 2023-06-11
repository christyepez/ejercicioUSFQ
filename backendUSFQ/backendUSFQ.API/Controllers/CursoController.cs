using backendUSFQ.Entity.Models.Dto;
using backendUSFQ.Entity.Models;
using Microsoft.AspNetCore.Mvc;
using backendUSFQ.Domain.Interfaces;

namespace backendUSFQ.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    // [Authorize]
    public class CursoController : Controller
    {
        private readonly ICurso _cursoRepositorio;
        protected ResponseDto _response;

        public CursoController(ICurso cursoRepositorio)
        {
            _cursoRepositorio = cursoRepositorio;
            _response = new ResponseDto();
        }


        // GET: api/Curso
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ECurso>>> GetCurso()
        {
            try
            {
                var lista = await _cursoRepositorio.GetCursos();
                _response.Result = lista;
                _response.DisplayMessage = "Lista de Curso";
            }
            catch (Exception ex)
            {

                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }

            return Ok(_response);
        }

        // GET: api/Curso/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ECurso>> GetCurso(int id)
        {
            var curso = await _cursoRepositorio.GetCursoById(id);
            if (curso == null)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Curso No Existe";
                return NotFound(_response);
            }
            _response.Result = curso;
            _response.DisplayMessage = "Informacion del Curso";
            return Ok(_response);
        }

        // PUT: api/Curso/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCurso(int id, CursoDto cursoDto)
        {
            try
            {
                CursoDto model = await _cursoRepositorio.CreateUpdateCurso(cursoDto);
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

        // POST: api/Curso
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ECurso>> PostCuenta(CursoDto cursoDto)
        {
            try
            {
                CursoDto model = await _cursoRepositorio.CreateUpdateCurso(cursoDto);
                _response.Result = model;
                return CreatedAtAction("GetCurso", new { id = model.CursoId }, _response);
            }
            catch (Exception ex)
            {

                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al Grabar el Registro";
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }

        }

        // DELETE: api/Curso/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCurso(int id)
        {
            try
            {
                bool estaEliminado = await _cursoRepositorio.DeleteCurso(id);
                if (estaEliminado)
                {
                    _response.Result = estaEliminado;
                    _response.DisplayMessage = "Curso Eliminado con Exito";
                    return Ok(_response);
                }
                else
                {
                    _response.IsSuccess = false;
                    _response.DisplayMessage = "Error al Eliminar Curso";
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
