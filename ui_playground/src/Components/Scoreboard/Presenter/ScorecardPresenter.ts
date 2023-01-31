import IScorecardDrawer from "../ScorecardDrawer/IScorecardDrawer";
import IElementProvider from "./IElementProvider";
import IScorecardPresenter from "./IScorecardPresenter";

class ScorecardPresenter implements IScorecardPresenter {
  private ctx: CanvasRenderingContext2D | null
  
  constructor(
    private readonly drawer: IScorecardDrawer, 
    private readonly elementProvider: IElementProvider
  ){
    this.ctx = null
  }

  public initialize(): void {
    const canvas = this.elementProvider.getElementById('hexagon') as HTMLCanvasElement
    
    if (canvas) {
      this.ctx = canvas.getContext('2d')
      this.drawHexagon()
    }
  }

  private drawHexagon(): void {
    if(this.ctx) {
      this.drawer.drawHexagon(this.ctx, { x: 100, y: 100 })
    }
  }
}

export default ScorecardPresenter 