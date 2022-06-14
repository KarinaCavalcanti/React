export default function jsx4() {
  const subtitle = "I'm in JavaScript"

  return (
    <div>
      <h1>Integration JS e JSX</h1>
      <h2>{subtitle}</h2>
      <h2>{3 * 3}</h2>
      <h2>{Math.max(13, 39)}</h2>
      <h2>{between(9.6, 1, 10)}</h2>
    </div>
  )
}

function between(value, min, max) {
  if (value >= min && value <= max) {
    return "Yes"
  } else {
    return "No"
  }
}