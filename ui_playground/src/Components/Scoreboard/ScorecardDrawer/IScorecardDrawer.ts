import CoordinateDto from "../Dtos/CoordinateDto"

interface IScorecardDrawer {
  drawHexagon(ctx: CanvasRenderingContext2D, startingPoint: CoordinateDto): void
}

export default IScorecardDrawer 