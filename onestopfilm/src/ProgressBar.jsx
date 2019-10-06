<ProgressBar
  filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
  percent={100}
>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
        🌑
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
        🌒
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
        🌓
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
        🌔
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={`transitionStep ${accomplished ? "accomplished" : null}`}
      >
        🌕
      </div>
    )}
  </Step>
</ProgressBar>