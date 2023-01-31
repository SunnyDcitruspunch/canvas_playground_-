import CoordinateDto from "../Dtos/CoordinateDto";
import IHexagonCoordinateCalculator from "../HexagonCoordinateCalculator/IHexagonCoordinateCalculator";
import IScorecardDrawer from "./IScorecardDrawer";

class ScorecardDrawer implements IScorecardDrawer {
  private readonly hexagonRadius = 100
  private readonly numberOfSides = 6

  constructor(private readonly hexagonCalculator: IHexagonCoordinateCalculator) {}

  public drawHexagon(ctx: CanvasRenderingContext2D, startingPoint: CoordinateDto): void {
    const gradientCoordinate = 170

    for (let i = 0; i < this.numberOfSides; i++) {
      const point = this.hexagonCalculator.calculateHexagonEndPointCoordinate(
        startingPoint,
        this.hexagonRadius,
        i
      )

      ctx.lineTo(point.x, point.y)
    }

    const gradient = ctx.createLinearGradient(0, gradientCoordinate, gradientCoordinate, 0)
    gradient.addColorStop(0, '#000000')
    gradient.addColorStop(1, '#404040')
    ctx.fillStyle = gradient
    ctx.fill()

    ctx.closePath()
    ctx.stroke()
  }
}

export default ScorecardDrawer 