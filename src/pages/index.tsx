import { useState, useEffect } from 'react';
import PoolingCalc from '@/components/PoolingCalc';
import Head from 'next/head';

export default function ConvolutionCalculator() {
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
    


    <div className="flex flex-col items-center space-y-4">

      <Head>
        <title>Convolution and Pooling Calculator</title>
        <meta name="description" content="Convolution and Pooling Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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



{
 outputWidth > 0 && (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl text-center pb- pt-4">
        Output Size: {outputWidth} x {outputHeight} x {outputChannels}
      </h1>
 
 <div className="flex items-center space-x-4 text-2xl pt-4">
<p className="text-2xl"> After Flattening: {outputWidth * outputHeight * outputChannels} </p>

      </div>
      <div className="mockup-code">
      <button className="btn gap-2" onClick={handleCopyClick}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
 { isCopied ? "Copied!" : "Copy to Clipboard"}
</button>
      <pre data-prefix=">" className="text-success"><code>PyTorch</code></pre>
      <code className="text-success ml-4" > torch.nn.Conv2d(in_channels = {inputChannels}, out_channels = {outputChannels}, 
kernel_size = {kernelSize}, stride={stride}, padding={padding}) </code>
<br/>
<button className="btn gap-2" onClick={handleKerasCopyClick}>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
 { isKerasCopied ? "Copied!" : "Copy to Clipboard"}
</button>
<pre data-prefix=">" className="text-orange-400"><code>Keras</code></pre>
<code className="text-orange-400 ml-4" > tf.keras.layers.Conv2D(filters = {outputChannels}, kernel_size = {kernelSize}, strides = {stride}, padding = {padding? 'same': 'valid' }) </code>
</div>
      

    </div>
  )

}

<PoolingCalc ></PoolingCalc>


<footer className="flex items-center justify-center w-full h-24 border-t">

<p className="text-center">
  Built with care by {'Pawel Piwowarski'} 
  </p>
  <a className="ml-2" href="https://github.com/pawelpiwowarski"
  target="_blank"
  rel="noopener noreferrer"
  >
    <p className="text-center underline">

See Github
    </p>
  </a>





</footer>

</div>
  );
    
}
