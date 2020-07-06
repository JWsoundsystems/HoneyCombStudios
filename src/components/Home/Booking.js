import React, { Component } from 'react'
class Booking extends Component {
  
  componentDidMount(){
    const script=document.createElement('script')
    script.src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqnCJarEJOcT3qmV35y6JuPlXiz3avV34mC2PeFJ4mC30m9dSycPCu7gevEhAJDXwPW?v=bCrsB8QWsBwfQfI8J5iHNfZbuLxUkoqNhVJ3F2JTthy#"
    script.async=true
    this.instance.appendChild(script)  
  }
    
  render() {
    return (
      <div>
        <div
          id="frameTitle"
          className="embedded-widget-title booking"
          style={{
            fontSize: '23px',
            color: '#333',
            fontFamily: 'Arial, Helvetica, sans-serif',
            
            textAlign:'center',
            boxSizing:'border-box'
          }}
        >
        </div>
        <div ref={el => (this.instance = el)} className="vagaro position-relative">
        </div>
      </div>
    )
  }
}
export default Booking