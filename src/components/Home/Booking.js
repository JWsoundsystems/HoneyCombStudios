import React, { Component } from 'react'
class Booking extends Component {
  
  
  componentDidMount(){
    const script=document.createElement('script')
    script.src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqnCJarEJOcT3qmV35y6JuPlXiz3avV34mC2PeFJ4mC30m9cqyc9YScfoR4pkUcPCu7gevEhAJDXwOW?v=GyMQ17qiLM8G6j18XzCy5vyUAEuy8abThtyfzz5veNzB0#"
    script.async=true
    this.instance.appendChild(script)  
  }
    
  render() {
    return (
      <div>
        <div
          id="frameTitle"
          className="embedded-widget-title"
          style={{
            fontSize: '23px',
            color: '#333',
            fontFamily: 'Arial, Helvetica, sans-serif',
            lineHeight:'24px',
            padding:'18px 10px 8px',
            textAlign:'center',
            boxSizing:'border-box'
          }}
        >
          Book Now
        </div>
        <div ref={el => (this.instance = el)} className="vagaro">
        </div>
      </div>
    )
  }
}
export default Booking