export default function Subtitle() {
  const name = "Jesus"
  const sum = (a, b) => a + b;
  return (
    <h2
      style={{
        color: "#e5e5e5",
      }}
    >
      {name} spent {sum(35, 5)} days in the desert in prayer
    </h2>
  )
}
