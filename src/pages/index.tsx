import { useState } from 'react';

export default function ConvolutionCalculator() {
  const [inputWidth, setInputWidth] = useState(0);
  const [inputHeight, setInputHeight] = useState(0);
  const [inputChannels, setInputChannels] = useState(0);
  const [kernelSize, setKernelSize] = useState(0);
  const [padding, setPadding] = useState(0);
  const [stride, setStride] = useState(0);
  const [outputChannels, setOutputChannels] = useState(0);
  const [outputWidth, setOutputWidth] = useState(0);
  const [outputHeight, setOutputHeight] = useState(0);


  const calculateOutputSize = () => {
    const outputWidth = Math.floor(
      (inputWidth + 2 * padding - kernelSize) / stride + 1
    );
    const outputHeight = Math.floor(
      (inputHeight + 2 * padding - kernelSize) / stride + 1
    );

    setOutputHeight(outputHeight);
    setOutputWidth(outputWidth);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
    <div className="grid grid-cols-3 gap-4 pt-20">
      <h1 className="col-span-3 text-3xl font-bold text-center pb-4">
        Convolution Calculator
      </h1>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-4">
          <label htmlFor="inputWidth">Input Width:</label>
          <input 
          className="range range-accent"
            type="range"
            min="0"
            max="100"
            value={inputWidth}
            onChange={(e) => setInputWidth(parseInt(e.target.value))}
            id="inputWidth"
          />
          <input

className="input"
            type="number"
            min="0"
            max="100"
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
            min="0"
            max="100"
            value={inputHeight}
            onChange={(e) => setInputHeight(parseInt(e.target.value))}
            id="inputHeight"
          />
  <input 
    className="input"
    type="number"
    min="0"
    max="100"
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
            min="0"
            max="100"
            value={inputChannels}
            onChange={(e) => setInputChannels(parseInt(e.target.value))}
            id="inputChannels"
          />
  <input 
    className="input"
    type="number"
    min="0"
    max="100"
    value={inputChannels  }
    onChange={(e) => setInputChannels(parseInt(e.target.value))}
    onBlur={(e) => setInputChannels(parseInt(e.target.value))}
  />
        </div>
       
  
  </div>
  <div className="flex flex-col items-center space-y-4">
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

        <div className="flex items-center space-x-4 pt-4">
          <label htmlFor="inputHeight">Padding:</label>
          <input
            className="range range-accent"

            type="range"
            min="0"
            max="100"
            value={padding}
            onChange={(e) => setPadding(parseInt(e.target.value))}
            id="padding"
          />

<input 
    className="input"
    type="number"
    min="0"
    max="100"
    value={padding}
    onChange={(e) => setPadding(parseInt(e.target.value))}
    onBlur={(e) => setPadding(parseInt(e.target.value))}
  />

        </div>
        <div className="flex items-center space-x-4 pt-6" >
          <label htmlFor="inputChannels">Stride:</label>
          <input
            className="range range-accent"
            type="range"
            min="0"
            max="100"
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
       
  
  </div>


  <div className="mt-4">


      <div className="flex items-center space-x-4">
        <label htmlFor="outputChannels">Output Channels:</label>
        <input 
className="range range-accent"
          type="range"
          min="0"
          max="100"
          value={outputChannels}
          onChange={(e) => setOutputChannels(parseInt(e.target.value))}
          id="outputChannels"
        />

<input 
    className="input"
    type="number"
    min="0"
    max="100"
    value={outputChannels}
    onChange={(e) => setOutputChannels(parseInt(e.target.value))}
    onBlur={(e) => setOutputChannels(parseInt(e.target.value))}
  />

      </div>
<div className="flex items-center space-x-4 p-4 ml-6">

    <button onClick={() => console.log(calculateOutputSize())} className="btn btn-outline btn-info">      Calculate Output Size</button>
</div>
    </div>


  </div>

  <div className="flex flex-col items-center space-y-4">

</div>

{
 outputWidth > 0 && (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold text-center pb-4">
        Output Size
      </h1>
      <div className="flex items-center space-x-4">
        <p> {outputWidth} x {outputWidth} x {outputChannels} </p>

      </div>

    </div>
  )

}


<footer className="flex items-center justify-center w-full h-24 border-t">

<p className="text-center">
  Built by {'Pawel Piwowarski'} 
  </p>
  <a className="ml-2" href="https://github.com/pawelpiwowarski"
  target="_blank"
  rel="noopener noreferrer"
  >
    <p className="text-center underline">

Github
    </p>
  </a>





</footer>

</div>
  );
    
}
