import IScorecardDrawer from "../ScorecardDrawer/IScorecardDrawer"
import IElementProvider from "./IElementProvider"
import IScorecardPresenter from "./IScorecardPresenter"
import ScorecardPresenter from "./ScorecardPresenter"

describe('Test scorecard presenter', () => {
  let drawer: IScorecardDrawer
  let elementProvider: IElementProvider
  let presenter: IScorecardPresenter

  beforeEach(() => {
    drawer = {
      drawHexagon:jest.fn()
    }
    elementProvider = {
      getElementById :jest.fn()
    }
   presenter = new ScorecardPresenter(drawer, elementProvider) 
  })

  it('Should initialize hexagon background', () => {
    presenter.initialize()
    expect(drawer.drawHexagon).toHaveBeenCalled()
  })
})