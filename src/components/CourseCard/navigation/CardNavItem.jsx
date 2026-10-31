import Icon from "../../Icon.jsx";

function CardNavItem({ icon, title, href }) {
  return (
    <a href={href} className="flex flex-col items-center text-cyan-950 hover:bg-white rounded-xl p-2 m-2">
      <div className="w-8">
        <Icon icon={icon} />
      </div>
      <p>{title}</p>
    </a>
  )
}

export default CardNavItem