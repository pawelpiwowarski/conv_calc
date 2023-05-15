

import { useState, useEffect } from "react";

export default function ConvCalc() {

    const [inputWidth, setInputWidth] = useState(1);
    const [inputHeight, setInputHeight] = useState(1);
    const [inputChannels, setInputChannels] = useState(1);
    const [kernelSize, setKernelSize] = useState(1);
    const [padding, setPadding] = useState(0);
    const [stride, setStride] = useState(1);
    const [outputChannels, setOutputChannels] = useState(1);
    const [outputWidth, setOutputWidth] = useState(0);
    const [outputHeight, setOutputHeight] = useState(0);
    const [isCopied, setIsCopied] = useState(false);
    const [isKerasCopied, setIsKerasCopied] = useState(false);

    function handleKerasCopyClick() {
        const code = ` tf.keras.layers.Conv2D(filters=${outputChannels}, kernel_size=${kernelSize}, strides=${stride}, padding=${padding? "same" : "valid"}, input_shape=(${inputWidth}, ${inputHeight}, ${inputChannels}))`;
        navigator.clipboard.writeText(code).then(() => {
          setIsKerasCopied(true);
          setTimeout(() => setIsKerasCopied(false), 2000);
        });
      }
    function handleCopyClick() {
        const code = `torch.nn.Conv2d(in_channels=${inputChannels}, out_channels=${outputChannels}, kernel_size=${kernelSize}, stride=${stride}, padding=${padding})`;
        navigator.clipboard.writeText(code).then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        });
      }

      useEffect(() => {

  
        const outputWidth = Math.floor(
          (inputWidth + 2 * padding - kernelSize) / stride + 1
        );
        const outputHeight = Math.floor(
          (inputHeight + 2 * padding - kernelSize) / stride + 1
        );
    
        setOutputHeight(outputHeight);
        setOutputWidth(outputWidth);
    
    }, [inputWidth, inputHeight, kernelSize, padding, stride]);
    



    return (
        <div className="grid grid-cols-2 gap-4 pt-20">
        <h1 className="col-span-3 text-4xl font-bold text-center pb-4">
          Convolution Calculator
        </h1>
  
        <div className="flex flex-col items-center space-y-12">
          <div className="flex items-center space-x-4">
            <label htmlFor="inputWidth">Input Width:</label>
            <input 
            className="range range-accent"
              type="range"
              min="1"
              max="128"
              value={inputWidth}
              onChange={(e) => setInputWidth(parseInt(e.target.value))}
              id="inputWidth"
            />
            <input
  
  className="input"
              type="number"
              min="1"
              max="128"
              value={inputWidth}
              onChange={(e) => setInputWidth(parseInt(e.target.value))}
              onBlur={(e) => setInputWidth(parseInt(e.target.value))}
            />  
  
  
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="inputHeight">Input Height:</label>
            <input
              className="range range-accent"
  
              type="range"
              min="1"
              max="128"
              value={inputHeight}
              onChange={(e) => setInputHeight(parseInt(e.target.value))}
              id="inputHeight"
            />
    <input 
      className="input"
      type="number"
      min="1"
      max="128"
      value={inputHeight  }
      onChange={(e) => setInputHeight(parseInt(e.target.value))}
      onBlur={(e) => setInputHeight(parseInt(e.target.value))}
    />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="inputChannels">Input Channels:</label>
            <input
              className="range range-accent"
              type="range"
              min="1"
              max="100"
              value={inputChannels}
              onChange={(e) => setInputChannels(parseInt(e.target.value))}
              id="inputChannels"
            />
    <input 
      className="input"
      type="number"
      min="1"
      max="100"
      value={inputChannels  }
      onChange={(e) => setInputChannels(parseInt(e.target.value))}
      onBlur={(e) => setInputChannels(parseInt(e.target.value))}
    />
          </div>
         
    
    </div>
    <div className="flex flex-col  space-y-4">
    <div className="flex items-center space-x-4">
    <label htmlFor="kernelSize">Kernel Size:</label>
    <input 
      className="range range-accent"
      type="range"
      min="1"
      max="100"
      value={kernelSize}
      onChange={(e) => setKernelSize(parseInt(e.target.value))}
      id="kernelSize"
    />
    <input 
      className="input"
      type="number"
      min="1"
      max="100"
      value={kernelSize}
      onChange={(e) => setKernelSize(parseInt(e.target.value))}
      onBlur={(e) => setKernelSize(parseInt(e.target.value))}
    />
  </div>
  
  <div className="flex items-center space-x-4">
            <label htmlFor="inputHeight">Padding:</label>
            <input
              className="range range-accent"
  
              type="range"
              min="0"
              max="10"
              value={padding}
              onChange={(e) => setPadding(parseInt(e.target.value))}
              id="padding"
            />
  
  <input 
      className="input"
      type="number"
      min="0"
      max="10"
      value={padding}
      onChange={(e) => setPadding(parseInt(e.target.value))}
      onBlur={(e) => setPadding(parseInt(e.target.value))}
    />
  
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="inputChannels">Stride:</label>
            <input
              className="range range-accent"
              type="range"
              min="1"
              max="10"
              value={stride}
              onChange={(e) => setStride(parseInt(e.target.value))}
              id="stride"
            />
     <input 
      className="input"
      type="number"
      min="1"
      max="100"
      value={stride}
      onChange={(e) => setStride(parseInt(e.target.value))}
      onBlur={(e) => setStride(parseInt(e.target.value))}
    />
          </div>
          <div className="flex items-center space-x-4">
          <label htmlFor="outputChannels">Output Channels:</label>
          <input 
  className="range range-accent"
            type="range"
            min="1"
            max="100"
            value={outputChannels}
            onChange={(e) => setOutputChannels(parseInt(e.target.value))}
            id="outputChannels"
          />
  
  <input 
      className="input"
      type="number"
      min="1"
      max="100"
      value={outputChannels}
      onChange={(e) => setOutputChannels(parseInt(e.target.value))}
      onBlur={(e) => setOutputChannels(parseInt(e.target.value))}
    />
  
        </div>
    
    </div>
  
  
  
  
  
    </div>



    )

  

    

}
