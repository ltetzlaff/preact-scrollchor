import React from 'react';
import { animateScroll, updateHistory } from './utils'
import { IAnimation, IScrollchorProps, BeforeAnimate, AfterAnimate } from './types'


export default class Scrollchor extends React.Component {
  constructor(
    public props: IScrollchorProps) {
    super(props)
  }

  public simulateClick() {
    this.handleClick()
  }

  private setup(props: IScrollchorProps) {
    const { to } = props
    this.simulateClick = this.handleClick;
  }

  private handleClick(event?: Event) {
    const { beforeAnimate, to, animate, afterAnimate, disableHistory } = this.props

    if (beforeAnimate) beforeAnimate(event);
    if (event) event.preventDefault();

    const toNoHash = to.replace(/^#/, "")
    const id = animateScroll(toNoHash, animate);
    if (id) {
      if (!disableHistory) updateHistory(id);
      if (afterAnimate) afterAnimate(event);
    }
  }

  public render () {
    const { to, children } = this.props

    return children
      ? <a {children} href={to} onClick={ e => this.handleClick(e) } />
      : null
  }
}
