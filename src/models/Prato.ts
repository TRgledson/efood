class Pratos {
  description: string
  image: string
  infos?: string[]
  score?: string
  title: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    title: string,
    infos?: string[],
    score?: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.score = score
    this.title = title
  }
}

export default Pratos
