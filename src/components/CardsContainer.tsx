const CardsContainer = ({ children }: Props) => {
  return (
    <div className="cardContainer">{children}</div>
  )
}

export default CardsContainer

type Props = {
  children: JSX.Element[]
}
