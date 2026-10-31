import CardNavWrapper from "./navigation/CardNavWrapper.jsx";

function Card({ data }) {
  return (
    <div className="flex h-110">
      <CardNavWrapper navItems={data.links}/>
      <div className="relative h-110 w-full overflow-hidden rounded-r-xl">
        <img
          src={data.imagePath}
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
        />

        <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/70 via-black/35 to-transparent px-6 py-4 pt-16 text-white">
          <p className="text-xl">{data.name}</p>
          <div className="flex gap-4 text-zinc-200">
            { data.badges.map((badge, index) => (
              <p key={index}>{badge}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;