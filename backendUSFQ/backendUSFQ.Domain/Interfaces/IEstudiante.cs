using backendUSFQ.Entity.Models.Dto;

namespace backendUSFQ.Domain.Interfaces
{
    public interface IEstudiante
    {
        Task<List<EstudianteDto>> GetEstudiante();

        Task<EstudianteDto> GetEstudianteById(int id);

        Task<EstudianteDto> CUpdateEstudiante(EstudianteDto clienteDto);

        Task<bool> DeleteEstudiante(int id);
    }
}
