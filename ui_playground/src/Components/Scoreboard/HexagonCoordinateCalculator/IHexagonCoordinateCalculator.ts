import CoordinateDto from "../Dtos/CoordinateDto"

interface IHexagonCoordinateCalculator {
  calculateHexagonEndPointCoordinate(
    coordinate: CoordinateDto,
    radius: number,
    areaNumber: number
  ): CoordinateDto
}

export default IHexagonCoordinateCalculator 