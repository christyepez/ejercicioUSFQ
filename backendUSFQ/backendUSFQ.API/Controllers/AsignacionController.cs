using backendUSFQ.Domain.Interfaces;
using backendUSFQ.Entity.Models;
using backendUSFQ.Entity.Models.Dto;
using Microsoft.AspNetCore.Mvc;

namespace backendUSFQ.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //  [Authorize]
    public class AsignacionController : Controller
    {
        private readonly IAsignacion _asignacionRepositorio;
        protected ResponseDto _response;

        public AsignacionController(IAsignacion asignacionRepositorio)
        {
            _asignacionRepositorio = asignacionRepositorio;
            _response = new ResponseDto();
        }
        // GET: api/Asignacion
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EAsignacion>>> GetAsignacion()
        {
            try
            {
                var lista = await _asignacionRepositorio.GetAsignacion();
                _response.Result = lista;
                _response.DisplayMessage = "Lista de Asignaciones Cursos";
            }
            catch (Exception ex)
            {

                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.ToString() };
            }

            return Ok(_response);
        }

        // GET: api/Asignacion/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EAsignacion>> GetAsignacion(int id)
        {
            var movimiento = await _asignacionRepositorio.GetAsignacionById(id);
            if (movimiento == null)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Asignacion No Existe";
                return NotFound(_response);
            }
            _response.Result = movimiento;
            _response.DisplayMessage = "Informacion del Asignacion";
            return Ok(_response);
        }

        // PUT: api/Asignacion/5 
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovimiento(int id, AsignacionDto movimientoDto)
        {
            try
            {
                AsignacionDto model = await _asignacionRepositorio.CreateUpdateAsignacion(movimientoDto);
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

        // POST: api/Asignacion 
        [HttpPost]
        public async Task<ActionResult<EAsignacion>> PostAsignacion(AsignacionDto asignacionDto)
        {
            try
            {
                AsignacionDto model = await _asignacionRepositorio.CreateUpdateAsignacion(asignacionDto);
                _response.Result = model;
                return CreatedAtAction("GetAsignacion", new { id = model.AsignacionId }, _response);
            }
            catch (Exception ex)
            {

                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al Grabar el Registro";
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }

        }

        // DELETE: api/Asignacion/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovimiento(int id)
        {
            try
            {
                bool estaEliminado = await _asignacionRepositorio.DeleteAsignacion(id);
                if (estaEliminado)
                {
                    _response.Result = estaEliminado;
                    _response.DisplayMessage = "Asignacion Eliminado con Exito";
                    return Ok(_response);
                }
                else
                {
                    _response.IsSuccess = false;
                    _response.DisplayMessage = "Error al Eliminar Asignacion";
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
