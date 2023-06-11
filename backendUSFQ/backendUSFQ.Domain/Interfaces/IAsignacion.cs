using backendUSFQ.Entity.Models.Dto;
 

namespace backendUSFQ.Domain.Interfaces
{
    public interface IAsignacion
    {
        Task<List<AsignacionDto>> GetAsignacion();

        Task<AsignacionDto> GetAsignacionById(int id);

        Task<AsignacionDto> CreateUpdateAsignacion(AsignacionDto asignacionDto);

        Task<bool> DeleteAsignacion(int id);
    }
}
