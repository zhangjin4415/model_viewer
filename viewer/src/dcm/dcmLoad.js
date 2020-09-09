import React from 'react';
import ReactDOM from 'react-dom';
// import cornerstone from '../lib/cornerstone.js';
// import cornerstoneTools from '../lib/cornerstoneTools.js';
// import cornerstoneMath from '../lib/cornerstoneMath.min.js'
// import Hammer from '../lib/hammer.js'
// import dicomParser from '../lib/dicomParser.min.js'
// import cornerstoneWebImageLoader from '../lib/cornerstoneWebImageLoader.min.js'
// import cornerstoneWADOImageLoader from '../lib/cornerstoneWADOImageLoader.min.js'


import * as cornerstone from "../lib/cornerstone.js";
import * as cornerstoneTools from "../lib/cornerstoneTools.js";
import * as cornerstoneMath from "../lib/cornerstoneMath.min.js";
import * as Hammer from '../lib/hammer.js'
import * as dicomParser from '../lib/dicomParser.min.js'
import * as cornerstoneWebImageLoader from '../lib/cornerstoneWebImageLoader.min.js'
import * as cornerstoneWADOImageLoader from '../lib/cornerstoneWADOImageLoader.min.js'

class DcmLoad extends React.Component {
	constructor(props){
		super(props);
    }
    
    componentWillMount() {
        cornerstoneTools.external.cornerstone = cornerstone;
        cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
        cornerstoneTools.external.Hammer = Hammer;
        cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
        cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
      }

	componentDidMount() {
        cornerstoneTools.init();
        var element = document.getElementById('dicomImage');
        cornerstone.enable(element);

        var imageId = "wadouri:http://127.0.0.1:8080/000001.dcm";

        //wwwc
        const WwwcTool = cornerstoneTools.WwwcTool;
        cornerstoneTools.addTool(WwwcTool);
        cornerstoneTools.setToolActive('Wwwc',{mouseButtonMask: 1})

        cornerstone.loadAndCacheImage(imageId).then(function(image) {
            cornerstone.displayImage(element, image)
        })
	}


  render () {
    return (
      <div>
        <div id="dicomImage" style={{width:'512px',height:'512px'}}/>
      </div>
    )
  }
}

export default DcmLoad;