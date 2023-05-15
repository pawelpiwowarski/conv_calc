

import { useState, useEffect } from "react";

export default function PoolingCalc() {

    const [inputWidth, setInputWidth] = useState(1);
    const [inputHeight, setInputHeight] = useState(1);
    const [inputChannels, setInputChannels] = useState(1);
    const [kernelSize, setKernelSize] = useState(1);
    const [padding, setPadding] = useState(0);
    const [stride, setStride] = useState(1);
    const [outputChannels, setOutputChannels] = useState(1);
    const [outputWidth, setOutputWidth] = useState(0);
    const [outputHeight, setOutputHeight] = useState(0);

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

        <div className="flex flex-col items-center space-y-4">
<div className="grid grid-cols-2 gap-4 pt-10">
      <h1 className="col-span-3 text-3xl font-bold text-center pb-4">
        Pooling Calculator
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
    min="0"
    max="100"
    value={kernelSize}
    onChange={(e) => setKernelSize(parseInt(e.target.value))}
    id="kernelSize"
  />
  <input 
    className="input"
    type="number"
    min="0"
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
    min="0"
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

      {
 outputWidth > 0 && (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold text-center pb-4">
        Output Size
      </h1>
      <div className="flex items-center space-x-4 text-2xl">
        <p> {outputWidth} x {outputHeight} x {outputChannels} </p>

      </div>
      <div className="mockup-code">
      <pre data-prefix=">" className="text-success"><code>PyTorch</code></pre>
<code>  torch.nn.MaxPool2d(
kernel_size = {kernelSize}, stride={stride}, padding={padding}) </code>
</div>

    </div>
  )

}

      </div>



    )
}