import './style.css'

import { Component, ReactElement } from 'react'
import IScorecardDrawer from './Presenter/IScorecardPresenter'

type Props = {
  presenter: IScorecardDrawer
}

class Hexagon extends Component<Props> {
  componentDidMount(): void {
    this.props.presenter.initialize()
  }

  render(): ReactElement {
    return (
      <div className='hexagon'>
        <canvas id='hexagon' width='200' height='200' />
      </div>
    )
  }

}

export default Hexagon
