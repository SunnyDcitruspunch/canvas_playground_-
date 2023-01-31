import CoordinateDto from "../Dtos/CoordinateDto";
import IHexagonCoordinateCalculator from "./IHexagonCoordinateCalculator";

class HexagonCoordinateCalculator implements IHexagonCoordinateCalculator {
  public calculateHexagonEndPointCoordinate(coordinate: CoordinateDto, radius: number, areaNumber: number): CoordinateDto {
    const numberOfSides = 6
    const area = (2 * Math.PI) / numberOfSides
    const { x, y } = coordinate

    return {
      x: x + radius * Math.sin(area * areaNumber),
      y: y + radius * Math.cos(area * areaNumber)
    }
  }
}

export default HexagonCoordinateCalculator 