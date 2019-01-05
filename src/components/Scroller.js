
/* class Scroller extends Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       position: 0,
 *       height: 1154,
 *     }
 *   }
 * 
 *   componentDidMount() {
 *     this.timerID = setInterval(
 *       () => this.scroll(),
 *       100
 *     );
 *   }
 * 
 *   componentWillUnmount() {
 *     clearInterval(this.timerID);
 *   }
 * 
 *   scroll() {
 *     this.setState({
 *       position: this.state.position <= this.state.height - 166 ? this.state.position + 1 : 0,
 *     });
 *   }
 *     
 *   render() {
 *     return (
 *       <div
 *        className="browser-window-mobile">
 * 	  <a
 * 	   href="http://dev.c2st.org/"
 * 	   target="_blank" rel="noopener noreferrer">
 * 	  <img 
 * 	   className="browser-window-background"
 * 	   src={require('./img/phone-window-medium.png')}
 * 	   srcSet={`
 * ${require('./img/phone-window-small.png')} 1x, 
 * ${require('./img/phone-window-medium.png')} 2x,
 * ${require('./img/phone-window-large.png')} 3x`}
 * 	   width="96" 
 * 	   height="177" 
 * 	   alt="" 
 * 	  />
 * 	  </a>
 *           <div className="img-wrap" style={{
 * 	    backgroundPosition: `0 -${this.state.position}px`,
 * 	  }}>
 * 	      
 *           </div>
 *       </div>
 *       
 *     )
 *   }
 * } */
