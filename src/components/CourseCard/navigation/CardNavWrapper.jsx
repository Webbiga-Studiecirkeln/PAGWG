import CardNavItem from "./CardNavItem.jsx";

function CardNavWrapper({ navItems }) {
    return (
        <div className="bg-orange-200 flex flex-col justify-between rounded-l-xl">
            {navItems.map((item, index) => (
                <CardNavItem key={index} icon={item.icon} title={item.title} href={item.href} />
            ))}
        </div>
    )
}

export default CardNavWrapper;