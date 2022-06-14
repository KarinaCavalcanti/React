function gerarLista(final = 10) {
  const list = []
  for (let i = 1; i <= final; i++) {
    list.push(<span>{i}, </span>)
  }
  return list
}

export default function challenge03() {
  return (
    <>
      {gerarLista(20)}
    </>
  )
}