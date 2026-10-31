import NavItem from "./NavItem.jsx";

function Navbar() {
  const navItems = [
    {
      title: 'Studiecirkel',
      href: 'https://discord.gg/8asmXZXc8q'
    },
    {
      title: 'Programschema',
      href: 'https://cloud.timeedit.net/bth/web/sched1/ri167XQQ721Z50Qm17087gZ6y5Y255Y64YQ0.html',
    },
    {
      title: 'Programplan',
      href: 'https://bthplaner.blob.core.windows.net/utbildningsplaner/PAGWG_HT-26.pdf'
    }
  ]

  return (
    <header className="max-w-7xl mx-auto p-6">
      <ul className="flex flex-col items-center gap-4 md:flex-row justify-between">
        {navItems.map((item, index) => (
          <NavItem key={index} href={item.href}>{item.title}</NavItem>
        ))}
      </ul>
    </header>
  )
}

export default Navbar;